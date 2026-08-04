async function sendMessage(sock, jid, text) {
  await sock.sendMessage(jid, {
    text: text
  });
}

module.exports = sendMessage;
