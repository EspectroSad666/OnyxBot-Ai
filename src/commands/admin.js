function adminCommand(action) {

  switch(action) {

    case "panel":
      return `
🛡️ Panel de Administrador

👋 Bienvenida
📜 Reglas
🛡️ Moderación
⚠️ Advertencias
`;

    case "ayuda":
      return `
Comandos de administrador:

- bienvenida on/off
- moderacion on/off
- reglas
`;

    default:
      return "⚠️ Acción desconocida.";
  }

}

module.exports = adminCommand;
