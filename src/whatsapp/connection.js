const {
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers,
  delay
} = require("@whiskeysockets/baileys");

const pino = require("pino");

const handleConnectionUpdate = require("./events");
const startReceiver = require("./receiver");

// Déjalo con el mismo número que ya verificaste.
// Solo dígitos, sin +, espacios ni guiones.
const PHONE_NUMBER = "14029867586";

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const { state, saveCreds } =
    await useMultiFileAuthState("./database/auth");

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: "silent" }),

    // Este es el cambio importante.
    browser: Browsers.ubuntu("Chrome"),

    syncFullHistory: false,
    markOnlineOnConnect: false
  });

  sock.ev.on("creds.update", saveCreds);
  sock.ev.on("connection.update", handleConnectionUpdate);

  startReceiver(sock);

  if (!state.creds.registered) {
    console.log("⏳ Preparando código de vinculación...");

    await delay(3000);

    try {
      const code = await sock.requestPairingCode(PHONE_NUMBER);

      console.log("");
      console.log("══════════════════════════════");
      console.log("📱 Código de vinculación:");
      console.log(`🔑 ${code}`);
      console.log("══════════════════════════════");
      console.log("");
    } catch (error) {
      console.log(
        "❌ No se pudo generar el código:",
        error?.message || error
      );
    }
  }

  return sock;
}

module.exports = connectWhatsApp;
