![Chedis Logo](Chedis-Logo.svg)

# Chedis
## Chevereto + Discord
Discord Bot which automatically uploads any image attachments via Chevereto API when called with !archive. 

On success it reacts with on the message. 

On error, it will write a message into the channel.

## Demo / Access
TODO: Make the bot public accessible/flexible (maybe with json user settings?)

## Requirements

- [Node.js](http://nodejs.org/)
- [Discord](https://discordapp.com/) account

## Installation Steps

0. Register new bot with Discord Developer Portal 
1. Clone repo
2. Run `npm install`
3. Add credentials in a `.env` file. See `.env.example`
3. Run `npm start` or `node src/index.js` 
4. Interact with Chedis via text message on Discord (!archive) and attach any image to upload.

## License
This software is published under the MIT license
