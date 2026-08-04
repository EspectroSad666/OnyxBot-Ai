const logs = require("../database/logs.json");

function addLog(type, user, action) {

  logs.logs.push({
    type,
    user,
    action,
    date: new Date().toISOString()
  });

}

function getLogs() {
  return logs.logs;
}

module.exports = {
  addLog,
  getLogs
};
