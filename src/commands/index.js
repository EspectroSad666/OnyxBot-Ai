const helpCommand = require("./help");

const commands = {
  ayuda: helpCommand
};

function executeCommand(command) {
  if (commands[command]) {
    return commands[command]();
  }

  return "⚠️ Comando no encontrado.";
}

module.exports = executeCommand;
