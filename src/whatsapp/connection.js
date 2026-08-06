const {
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers,
  delay
} = require("@whiskeysockets/baileys");

const pino = require("pino");

const handleConnectionUpdate = require("./events");
const startReceiver = require("./receiver");

// Estados Unidos: 1 + código de área + número.
// Sin +, espacios, guiones ni paréntesis.
const PHONE_NUMBER = "14029867586";

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const { state, saveCreds } =
    await useMultiFileAuthState("./database/auth");

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: "silent" }),
    browser: Browsers.macOS("Google Chrome"),
    markOnlineOnConnect: false,
    syncFullHistory: false
  });

  sock.ev.on("creds.update", saveCreds);
  sock.ev.on("connection.update", handleConnectionUpdate);

  startReceiver(sock);

  if (!state.creds.registered) {
    console.log("⏳ Esperando que WhatsApp prepare la conexión...");

    // Evita el error 428 / Connection Closed.
    await delay(5000);

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
