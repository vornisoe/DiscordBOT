require('dotenv').config({ path: './token.env' });
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Bot jest online!'); // Pl: Chcesz to zmień sobie napis na inny
});

//PL: Nie wpisujemy tutaj naszego tokenu, token jest przechowywany w pliku token.env
client.login(process.env.DISCORD_TOKEN);
