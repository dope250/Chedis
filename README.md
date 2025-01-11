![Chedis Logo](Chedis-Logo.svg)

# Chedis
## Chevereto + Discord
Discord Bot which automatically uploads any image attachments via Chevereto API when called with !archive. 

On success it reacts with ✅ on the message. 

On error, it will write a message into the channel.

## Demo / Access
TODO: Make the bot public accessible/flexible (maybe with json user settings?)

## Requirements

- [Node.js](http://nodejs.org/)
- [Discord](https://discordapp.com/) account
- Bot Permissions: 67648

## Installation Steps

1. Register new bot with Discord Developer Portal 
2. Clone repo
3. Run `npm install`
4. Add credentials in a `.env` file. See `.env.example`
5. Run `npm start` or `node src/index.js` 
6. Interact with Chedis via text message on Discord (!archive) on a already existing message with image or attach one.

## License
This software is published under the MIT license
