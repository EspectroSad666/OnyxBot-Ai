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

  if (!state.creds.registered) {
  setTimeout(async () => {
    try {
      const phoneNumber = "14029867586";

      const code = await sock.requestPairingCode(phoneNumber);

      console.log(`📲 Código de vinculación: ${codigo}`);
    } catch (error) {
      console.log("❌ Error generando código:", error.message);
    }
  }, 5000);
  }
    console.log("══════════════════════════════");
    console.log("📱 Código de vinculación:");
    console.log(`🔑 ${code}`);
    console.log("══════════════════════════════");
    console.log("");
  }

  startReceiver(sock);

  return sock;
}

module.exports = connectWhatsApp;
