const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  Browsers
} = require("@whiskeysockets/baileys");

const pino = require("pino");

const handleConnectionUpdate = require("./events");
const startReceiver = require("./receiver");

const PHONE_NUMBER = "14029867586";

let pairingCodeRequested = false;

async function connectWhatsApp() {
  console.log("📱 Preparando conexión con WhatsApp...");

  const { state, saveCreds } =
    await useMultiFileAuthState("./database/auth");

  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: "silent" }),
    browser: Browsers.macOS("Chrome")
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async (update) => {
    const { connection, qr } = update;

    handleConnectionUpdate(update);

    const readyForPairing =
      connection === "connecting" || Boolean(qr);

    if (
      readyForPairing &&
      !state.creds.registered &&
      !pairingCodeRequested
    ) {
      pairingCodeRequested = true;

      try {
        const code = await sock.requestPairingCode(
          PHONE_NUMBER
        );

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
  });

  startReceiver(sock);

  return sock;
}

module.exports = connectWhatsApp;
