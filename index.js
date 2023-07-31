const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '6647339336:AAGoq-3l0TNeoRelKF-Zw-XyYM64uUltrPI';

const bot = new TelegramBot(TOKEN, { polling: true });


bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Enter the link of the bot you want to test:');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text.startsWith('http://') || text.startsWith('https://') || text.startsWith('@')) {
    bot.sendMessage(chatId, 'Wait for the result...');
    setTimeout(() => {
      bot.sendMessage(chatId, 'Scanning this shit...');
      setTimeout(() => {
        bot.sendMessage(chatId, 'Yes, it\'s bullshit.');
        bot.sendPhoto(msg.chat.id, './shit.PNG');
      }, 1000);
    }, 3000);
  } else if (text.startsWith('/start')) {
    return true;
  } else {
    bot.sendMessage(chatId, 'Enter a valid link or bot name, for example @nicebot');
  }
});
