require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const imageToBase64 = require('image-to-base64');  // Helper to convert image to base64

// Initialize the bot client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Log in to Discord with your app's token
client.login(process.env.TOKEN);

// When the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Command handler for messages
client.on('messageCreate', async (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check if the message starts with !archive
    if (message.content.toLowerCase() === '!archive') {

        // Check if message is a reply to another with attachment and load these instead
        if (message.reference) {
            message = await message.channel.messages.fetch(message.reference.messageId);
        };

        // Check if there is an attachment in the message
        if (message.attachments.size > 0) {
            // Get the first attachment
            const attachment = message.attachments.first();
            const imageUrl = attachment.url;

            message.attachments.forEach(async (attachment) => {
                const imageUrl = attachment.url;

                try {
                    // Fetch the image and convert it to base64
                    const imageBase64 = await imageToBase64(imageUrl);
    
                    // Prepare the data to send to Chevereto
                    const formData = new URLSearchParams();
                    formData.append('key', process.env.CHEVERETO_API);  // API key
                    formData.append('album_id', process.env.CHEVERETO_ALBUM_ID); // Album ID to upload to
                    formData.append('image', imageBase64);  // Base64 encoded image

                    // Send the image to Chevereto API
                    const response = await axios.post(process.env.CHEVERETO_URL + '/api/1/upload', formData, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    // Check if the response is successful and send the URL
                    if (response.data.success) {
                        await message.react('✅');
                    } else {
                        message.channel.send('Failed to upload the image. Please try again.');
                    }
                } catch (error) {
                    console.error('Error processing image:', error);
                    message.channel.send('Failed to process the image. Please try again.');
                }
            });

        } else {
            message.channel.send('Please attach an image to upload!');
        }
    }
});
