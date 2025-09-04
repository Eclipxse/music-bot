# 🎵 Discord Music Bot

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green?logo=node.js)](https://nodejs.org/) 
[![discord.js](https://img.shields.io/badge/discord.js-v14-blue?logo=discord)](https://discord.js.org/) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple and powerful Discord music bot built with **Node.js** and **discord.js**.  
Play high-quality music in your server with easy-to-use commands.  

---

## 🚀 Features
- 🎶 Play music from YouTube (and more sources if enabled)  
- ⏯️ Basic controls: play, pause, resume, stop, skip  
- 📃 Queue system with loop and shuffle  
- 🔎 Search and play by song name or link  
- 🛠️ Easy setup and customization  

---

## 📦 Installation & Setup (Step by Step)

### **Step 1: Clone the repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Step 2: Install dependencies
bash
Copy code
npm install
Step 3: Create a bot in Discord Developer Portal
Go to Discord Developer Portal

Click New Application → Give it a name

Go to Bot tab → Click Add Bot

Copy the Bot Token (you’ll need it later)

Enable Privileged Gateway Intents: Presence + Server Members + Message Content

Step 4: Configure environment
Create a .env file in the root folder and add:

env
Copy code
DISCORD_TOKEN=your-bot-token
CLIENT_ID=your-bot-client-id
GUILD_ID=your-guild-id
DISCORD_TOKEN → Your bot token

CLIENT_ID → Application (client) ID from Developer Portal

GUILD_ID → Your Discord server ID (for testing slash commands)

Step 5: Invite the bot to your server
Go to OAuth2 → URL Generator in Developer Portal

Select bot and applications.commands

Choose permissions (Administrator is easiest for testing)

Copy the generated URL and open it in a browser to invite the bot

Step 6: Run the bot
bash
Copy code
npm start
🎮 Commands
Command	Description
!play <song>	Play a song or add to queue
!pause	Pause the music
!resume	Resume playback
!skip	Skip current song
!stop	Stop music and clear queue
!queue	Show the current queue
!loop	Toggle loop mode

📌 Requirements
Node.js v16+

discord.js v14

A Discord bot token (from the Discord Developer Portal)

🤝 Contributing
Contributions are welcome! Fork this repo and submit a pull request if you’d like to help.

📜 License
This project is licensed under the MIT License.

💡 Acknowledgements
discord.js

DisTube / discord-player for music handling

yaml
Copy code

---

🔥 This one has **everything numbered step by step** in a single file.  
Do you also want me to **add a “Preview” section with a demo screenshot/GIF** of the bot running in Discord to make it look more professional?






You said:
put all those inside the markdown file so i can just copy paste it


ChatGPT said:
Got it ✅ — here’s the complete README.md file ready for copy-paste into your repo:

markdown
Copy code
# 🎵 Discord Music Bot

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green?logo=node.js)](https://nodejs.org/) 
[![discord.js](https://img.shields.io/badge/discord.js-v14-blue?logo=discord)](https://discord.js.org/) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple and powerful Discord music bot built with **Node.js** and **discord.js**.  
Play high-quality music in your server with easy-to-use commands.  

---

## 🚀 Features
- 🎶 Play music from YouTube (and more sources if enabled)  
- ⏯️ Basic controls: play, pause, resume, stop, skip  
- 📃 Queue system with loop and shuffle  
- 🔎 Search and play by song name or link  
- 🛠️ Easy setup and customization  

---

## 📦 Installation & Setup (Step by Step)

### **Step 1: Clone the repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Step 2: Install dependencies
bash
Copy code
npm install
Step 3: Create a bot in Discord Developer Portal
Go to Discord Developer Portal

Click New Application → Give it a name

Go to Bot tab → Click Add Bot

Copy the Bot Token (you’ll need it later)

Enable Privileged Gateway Intents: Presence + Server Members + Message Content

Step 4: Configure environment
Create a .env file in the root folder and add:

env
Copy code
DISCORD_TOKEN=your-bot-token
CLIENT_ID=your-bot-client-id
GUILD_ID=your-guild-id
DISCORD_TOKEN → Your bot token

CLIENT_ID → Application (client) ID from Developer Portal

GUILD_ID → Your Discord server ID (for testing slash commands)

Step 5: Invite the bot to your server
Go to OAuth2 → URL Generator in Developer Portal

Select bot and applications.commands

Choose permissions (Administrator is easiest for testing)

Copy the generated URL and open it in a browser to invite the bot

Step 6: Run the bot
bash
Copy code
npm start
🎮 Commands
Command	Description
!play <song>	Play a song or add to queue
!pause	Pause the music
!resume	Resume playback
!skip	Skip current song
!stop	Stop music and clear queue
!queue	Show the current queue
!loop	Toggle loop mode

📌 Requirements
Node.js v16+

discord.js v14

A Discord bot token (from the Discord Developer Portal)

🤝 Contributing
Contributions are welcome! Fork this repo and submit a pull request if you’d like to help.

📜 License
This project is licensed under the MIT License.

💡 Acknowledgements
discord.js

DisTube / discord-player for music handling
