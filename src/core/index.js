const personality = require("../ai/personality");
const config = require("../database/config.json");
const connectWhatsApp = require("../whatsapp/connection");

async function startBot() {
  console.log("⚫ OnyxBot AI iniciando...");
  console.log(`💎 Nombre: ${config.botName}`);
  console.log(`🧠 Rol: ${personality.role}`);

  await connectWhatsApp();

  console.log("✅ OnyxBot preparado.");
}

startBot();
