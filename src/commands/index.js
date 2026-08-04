const helpCommand = require("./help");
const statusCommand = require("./status");

const commands = {
  ayuda: helpCommand,
  estado: statusCommand
};

function executeCommand(command) {
  if (commands[command]) {
    return commands[command]();
  }

  return "⚠️ Comando no encontrado.";
}

module.exports = executeCommand;
