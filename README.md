# 🎵 Discord Music Bot

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green?logo=node.js)](https://nodejs.org/) 
[![discord.js](https://img.shields.io/badge/discord.js-v14-blue?logo=discord)](https://discord.js.org/) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple and powerful Discord music bot built with **Node.js** and **discord.js**.  
Play high-quality music in your server with easy-to-use commands.  

---

## 📦 Installation & Setup

1. Install the prerequisites:  
   - [Node.js](https://nodejs.org/) v16+  
   - [discord.js](https://discord.js.org/) v14  
   - A Discord bot token (from the [Discord Developer Portal](https://discord.com/developers/applications))  

2. Clone the repository  
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
Install dependencies

bash
Copy code
npm install
Create a bot in the Discord Developer Portal:

Click New Application and give it a name

Go to the Bot tab → click Add Bot

Copy the Bot Token (you’ll need it later)

Enable Privileged Gateway Intents (Presence, Server Members, Message Content)

Create a .env file in the root folder and add:

env
Copy code
DISCORD_TOKEN=your-bot-token
CLIENT_ID=your-bot-client-id
GUILD_ID=your-guild-id
where DISCORD_TOKEN is your bot token, CLIENT_ID is your application ID, and GUILD_ID is your server ID.

Invite the bot to your server:

In the Developer Portal, go to OAuth2 → URL Generator

Select bot and applications.commands

Choose the required permissions (Administrator is easiest for testing)

Copy the generated link and open it in a browser to invite the bot

Run the bot

bash
Copy code
npm start
Use commands in your server:

!play <song> → Play a song or add to queue

!pause → Pause the music

!resume → Resume playback

!skip → Skip the current song

!stop → Stop music and clear queue

!queue → Show the current queue

!loop → Toggle loop mode

Contribute if you’d like to improve the bot by forking this repo and submitting a pull request.

This project is licensed under the MIT License.

Special thanks to:

discord.js

DisTube / discord-player for music handling

