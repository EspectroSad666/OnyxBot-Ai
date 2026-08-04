const rules = require("../database/rules.json");

function getRules(groupId) {
  return rules.rules[groupId] || [];
}

function setRules(groupId, newRules) {
  rules.rules[groupId] = newRules;
}

module.exports = {
  getRules,
  setRules
};
