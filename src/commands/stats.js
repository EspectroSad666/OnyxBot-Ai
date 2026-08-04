const stats = require("../database/stats.json");

function statsCommand() {
  return `
📊 Estadísticas de OnyxBot

💬 Mensajes: ${stats.messages}
⚠️ Advertencias: ${stats.warnings}
🛡️ Acciones: ${stats.actions}

⚫ Sistema funcionando correctamente.
`;
}

module.exports = statsCommand;
