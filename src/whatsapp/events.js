function handleConnectionUpdate(update) {
  const { connection } = update;

  if (connection === "open") {
    console.log("🟢 OnyxBot conectado a WhatsApp.");
  }

  if (connection === "close") {
    console.log("🔴 Conexión cerrada.");
  }
}

module.exports = handleConnectionUpdate;
