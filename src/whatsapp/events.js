function handleConnectionUpdate(update) {
  const { connection, lastDisconnect } = update;

  if (connection === "connecting") {
    console.log("🟡 OnyxBot conectando a WhatsApp...");
  }

  if (connection === "open") {
    console.log("🟢 OnyxBot conectado a WhatsApp.");
  }

  if (connection === "close") {
    console.log("🔴 Conexión cerrada.");

    if (lastDisconnect) {
      console.log("⚠️ Motivo:", lastDisconnect.error?.message);
    }
  }
}

module.exports = handleConnectionUpdate;
