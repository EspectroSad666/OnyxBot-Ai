const responder = require("../ai/responder");

function handleMessage(message) {
  console.log("📩 Mensaje recibido:", message);

  const respuesta = responder(message);

  console.log("💬 Respuesta de OnyxBot:", respuesta);
}

module.exports = handleMessage;
