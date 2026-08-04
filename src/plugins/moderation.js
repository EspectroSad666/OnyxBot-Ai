const forbiddenWords = [
  "palabra1",
  "palabra2"
];

function checkMessage(message) {
  const text = message.toLowerCase();

  return forbiddenWords.some(word =>
    text.includes(word)
  );
}

module.exports = checkMessage;
