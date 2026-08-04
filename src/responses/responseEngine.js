function generateResponse(action, context) {

  switch(action) {

    case "SHOW_RULES":
      return `
📜 Reglas del grupo:

1️⃣ Respeta a los miembros.
2️⃣ No hagas spam.
3️⃣ Usa los comandos correctamente.

⚫ OnyxBot protege esta comunidad.
`;

    case "SHOW_STATS":
      return `
📊 Estadísticas de OnyxBot:

💬 Mensajes procesados.
⚠️ Advertencias registradas.
🛡️ Acciones realizadas.
`;

    case "SHOW_HELP":
      return `
🤖 Ayuda de OnyxBot:

📜 reglas
📊 estadísticas
📖 historial
⚙️ configuración
`;

    case "SHOW_HISTORY":
      return `
📖 Historial:

Consulta los eventos recientes del grupo.
`;

    case "SHOW_STATUS":
      return `
⚫ OnyxBot está activo.

🟢 Sistema funcionando.
`;

    case "NORMAL_CHAT":
      return `
Hola 👋

Soy OnyxBot 🤖
¿Cómo puedo ayudarte?
`;

    default:
      return `
⚠️ No entendí la solicitud.
`;
  }

}

module.exports = generateResponse;
