const users = require("../database/users.json");

function checkPermission(userId, requiredRole) {
  const user = users.users.find(
    (user) => user.id === userId
  );

  if (!user) {
    return false;
  }

  if (requiredRole === "owner") {
    return user.role === "owner";
  }

  if (requiredRole === "admin") {
    return user.role === "owner" || user.role === "admin";
  }

  return true;
}

module.exports = checkPermission;
