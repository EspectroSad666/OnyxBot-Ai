const stats = require("../database/stats.json");

function addMessage() {
  stats.messages++;
}

function addWarning() {
  stats.warnings++;
}

function addAction() {
  stats.actions++;
}

function getStats() {
  return stats;
}

module.exports = {
  addMessage,
  addWarning,
  addAction,
  getStats
};
