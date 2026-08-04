const personality = require("../ai/personality");
const config = require("../database/config.json");

console.log("⚫ OnyxBot AI iniciado.");
console.log(`💎 Nombre: ${config.botName}`);
console.log(`🧠 Rol: ${personality.role}`);
console.log(`📌 Versión: ${config.version}`);
console.log("✅ Sistema preparado.");
