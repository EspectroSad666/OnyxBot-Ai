function responder(mensaje) {
  const texto = mensaje.toLowerCase();

  if (texto.includes("hola")) {
    return "⚫ Hola, soy OnyxBot. ¿En qué puedo ayudarte?";
  }

  if (texto.includes("quien eres") || texto.includes("quién eres")) {
    return "🤖 Soy OnyxBot AI. Más que un bot, un compañero para tu comunidad.";
  }

  return "🧠 Estoy procesando tu mensaje. Pronto podré responder con más inteligencia.";
}

module.exports = responder;
