function createContext(message) {

  return {
    user: message.key.participant || message.key.remoteJid,
    group: message.key.remoteJid,
    text: message.message?.conversation || "",
    timestamp: Date.now()
  };

}

module.exports = createContext;
