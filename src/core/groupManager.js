const groups = require("../database/groups.json");

function getGroup(groupId) {
  if (!groups.groups[groupId]) {
    groups.groups[groupId] = {
      welcome: true,
      prefix: "@OnyxBot",
      admins: []
    };
  }

  return groups.groups[groupId];
}

module.exports = getGroup;
