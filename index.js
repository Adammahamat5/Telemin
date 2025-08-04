const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, "Bienvenue sur TeleMine!");
});

app.get('/', (req, res) => {
  res.send("Bot en ligne !");
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
