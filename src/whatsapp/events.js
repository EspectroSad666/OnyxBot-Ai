function handleConnectionUpdate(update) {
  const { connection, lastDisconnect, qr } = update;

  if (qr) {
    console.log("📲 QR generado. Escanéalo con WhatsApp.");
  }

  if (connection === "open") {
    console.log("🟢 OnyxBot conectado a WhatsApp.");
  }

  if (connection === "close") {
    console.log("🔴 Conexión cerrada.");
  }
}

module.exports = handleConnectionUpdate;
