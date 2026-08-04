function checkMention(message) {
  const botName = "onyxbot";

  return message.toLowerCase().includes(botName);
}

module.exports = checkMention;
