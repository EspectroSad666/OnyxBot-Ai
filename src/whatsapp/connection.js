const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const handleConnectionUpdate = require("./events");
const startReceiver = require("./receiver");
const pino = require("pino");

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const { state, saveCreds } = await useMultiFileAuthState("./database/auth");

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: "silent" })
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", handleConnectionUpdate);

  startReceiver(sock);

  return sock;
}

module.exports = connectWhatsApp;
