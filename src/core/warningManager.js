const warnings = require("../database/warnings.json");

function addWarning(userId) {
  if (!warnings.warnings[userId]) {
    warnings.warnings[userId] = 0;
  }

  warnings.warnings[userId]++;

  return warnings.warnings[userId];
}

function getWarnings(userId) {
  return warnings.warnings[userId] || 0;
}

module.exports = {
  addWarning,
  getWarnings
};
