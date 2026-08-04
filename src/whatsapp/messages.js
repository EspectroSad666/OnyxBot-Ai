const processMessage = require("../botController");

async function processWhatsAppMessage(message, sock) {

  console.log("📱 Mensaje desde WhatsApp:");

  const response = await processMessage(message);

  if (response) {
    await sock.sendMessage(
      message.key.remoteJid,
      {
        text: response
      }
    );
  }

}

module.exports = processWhatsAppMessage;
