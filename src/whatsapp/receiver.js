const processMessage = require("./messages");

function startReceiver(sock) {
  sock.ev.on("messages.upsert", ({ messages }) => {
    for (const message of messages) {
      if (!message.key.fromMe) {
        processMessage(message);
      }
    }
  });
}

module.exports = startReceiver;
