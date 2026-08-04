const handleMessage = require("../events/message");

function processWhatsAppMessage(message) {
  console.log("📱 Mensaje desde WhatsApp:");
  
  handleMessage(message);
}

module.exports = processWhatsAppMessage;
