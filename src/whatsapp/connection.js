const { default: makeWASocket } = require("@whiskeysockets/baileys");
const handleConnectionUpdate = require("./events");

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const sock = makeWASocket({
    printQRInTerminal: true
  });

  sock.ev.on("connection.update", handleConnectionUpdate);

  return sock;
}

module.exports = connectWhatsApp;
