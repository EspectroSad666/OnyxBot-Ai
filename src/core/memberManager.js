const members = require("../database/members.json");

function getMember(userId) {
  if (!members.members[userId]) {
    members.members[userId] = {
      warnings: 0,
      joined: new Date().toISOString()
    };
  }

  return members.members[userId];
}

function updateMember(userId, data) {
  members.members[userId] = {
    ...getMember(userId),
    ...data
  };
}

module.exports = {
  getMember,
  updateMember
};
