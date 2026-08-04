const { default: makeWASocket } = require("@whiskeysockets/baileys");

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const sock = makeWASocket({
    printQRInTerminal: true
  });

  return sock;
}

module.exports = connectWhatsApp;
