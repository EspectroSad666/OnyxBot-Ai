const processMessage = require("../botController");
const handleMessage = require("../events/message");
const response = await processMessage(message);

if (response) {
    await sock.sendMessage(
        message.key.remoteJid,
        {
            text: response
        }
    );
}
function processWhatsAppMessage(message) {
  console.log("📱 Mensaje desde WhatsApp:");
  
  handleMessage(message);
}

module.exports = processWhatsAppMessage;
