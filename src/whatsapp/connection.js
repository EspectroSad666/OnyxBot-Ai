const {
  default: makeWASocket,
  useMultiFileAuthState
} = require("@whiskeysockets/baileys");

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

  if (!sock.authState.creds.registered) {
    const numero = "14029867586";
    const codigo = await sock.requestPairingCode(numero);

    console.log("");
    console.log("══════════════════════════════");
    console.log("📱 Código de vinculación:");
    console.log(`🔑 ${codigo}`);
    console.log("══════════════════════════════");
    console.log("");
  }

  startReceiver(sock);

  return sock;
}

module.exports = connectWhatsApp;
