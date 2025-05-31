require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ]
});

client.once('ready', () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // !ping command
  if (message.content === '!ping') {
    return message.reply('Pong! 🏓');
  }

  // !play <YouTube_URL>
  if (message.content.startsWith('!play ')) {
    const url = message.content.split(' ')[1];
    if (!ytdl.validateURL(url)) {
      return message.reply('❌ Please provide a valid YouTube URL.');
    }

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.reply('🚫 You must be in a voice channel to play music.');
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    const stream = ytdl(url, { filter: 'audioonly' });
    const resource = createAudioResource(stream);
    const player = createAudioPlayer();

    player.play(resource);
    connection.subscribe(player);

    message.reply(`🎶 Now playing: ${url}`);

    player.on(AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
