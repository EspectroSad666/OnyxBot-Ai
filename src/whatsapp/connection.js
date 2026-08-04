const { default: makeWASocket } = require("@whiskeysockets/baileys");
const handleConnectionUpdate = require("./events");
const startReceiver = require("./receiver");

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const sock = makeWASocket({
    printQRInTerminal: true
  });

  sock.ev.on("connection.update", handleConnectionUpdate);

  startReceiver(sock);

  return sock;
}

module.exports = connectWhatsApp;
