const { getLogs } = require("../core/logger");

function historyCommand() {

  const logs = getLogs();

  if (logs.length === 0) {
    return "📖 No hay actividad registrada todavía.";
  }

  return logs
    .slice(-5)
    .map(log =>
      `📌 ${log.action}\n👤 ${log.user}\n📅 ${log.date}`
    )
    .join("\n\n");
}

module.exports = historyCommand;
