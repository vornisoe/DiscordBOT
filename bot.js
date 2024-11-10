require('dotenv').config({ path: './token.env' });
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds],
    presence: {
        status: 'dnd', // online(zielony), idle(zolty), dnd(czerwony), invisible(szary)
        activities: [
            { 
                name: 'vornisoe - DiscordBOT', 
                type: ActivityType.Playing // PLAYING(Aktywnosc gra), STREAMING(Streamuje), LISTENING (Slucha), WATCHING(Oglada)
            }
        ]
    }
});

client.once('ready', () => {
    console.log('Bot jest online!');
});

client.login(process.env.DISCORD_TOKEN);
