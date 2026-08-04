const groups = require("../database/groups.json");

function getSettings(groupId) {
  if (!groups.groups[groupId]) {
    groups.groups[groupId] = {
      welcome: true,
      rules: true,
      moderation: true
    };
  }

  return groups.groups[groupId];
}

function updateSettings(groupId, settings) {
  groups.groups[groupId] = {
    ...getSettings(groupId),
    ...settings
  };
}

module.exports = {
  getSettings,
  updateSettings
};
