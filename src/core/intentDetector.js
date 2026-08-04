function detectIntent(text) {

  const message = text.toLowerCase();

  if (message.includes("reglas")) {
    return "RULES";
  }

  if (message.includes("estado")) {
    return "STATUS";
  }

  if (message.includes("ayuda")) {
    return "HELP";
  }

  if (message.includes("historial")) {
    return "HISTORY";
  }

  if (message.includes("estadisticas") || message.includes("stats")) {
    return "STATS";
  }

  return "CHAT";

}

module.exports = detectIntent;
