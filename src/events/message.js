const responder = require("../ai/responder");
const checkMention = require("./mention");

function handleMessage(message) {
  console.log("📩 Mensaje recibido:", message);

  if (checkMention(message)) {
    const respuesta = responder(message);

    console.log("💬 OnyxBot responde:", respuesta);
  }
}

module.exports = handleMessage;
