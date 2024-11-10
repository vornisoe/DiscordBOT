require('dotenv').config({ path: './token.env' });
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Bot jest online!'); // Pl: Chcesz to zmień sobie napis na inny, EN: You can change the text to another one if you want.
});

//PL: Nie wpisujemy tutaj naszego tokenu, token jest przechowywany w pliku token.env
//EN: We do not enter our token here; the token is stored in the token.env file.
client.login(process.env.DISCORD_TOKEN);
