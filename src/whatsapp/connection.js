const {
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers
} = require("@whiskeysockets/baileys");

const pino = require("pino");

const handleConnectionUpdate = require("./events");
const startReceiver = require("./receiver");

// Estados Unidos: 1 + los 10 dígitos.
// Sin +, espacios, guiones ni paréntesis.
const PHONE_NUMBER = "14029867586";

let pairingCodeRequested = false;

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const { state, saveCreds } =
    await useMultiFileAuthState("./database/auth");

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: "silent" }),
    browser: Browsers.macOS("Google Chrome")
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async (update) => {
    const { qr } = update;

    if (
      qr &&
      !state.creds.registered &&
      !pairingCodeRequested
    ) {
      pairingCodeRequested = true;

      try {
        const code =
          await sock.requestPairingCode(PHONE_NUMBER);

        console.log("");
        console.log("══════════════════════════════");
        console.log("📱 Código de vinculación:");
        console.log(`🔑 ${code}`);
        console.log("══════════════════════════════");
        console.log("");
      } catch (error) {
        pairingCodeRequested = false;

        console.log(
          "❌ No se pudo generar el código:",
          error.message
        );
      }
    }

    handleConnectionUpdate(update);
  });

  startReceiver(sock);

  return sock;
}

module.exports = connectWhatsApp;
