const checkPermission = require("./permissions");

function adminGuard(userId, action) {

  const allowed = checkPermission(
    userId,
    "admin"
  );

  if (!allowed) {
    return {
      allowed: false,
      message: "❌ No tienes permisos para usar este comando."
    };
  }

  return {
    allowed: true,
    action
  };
}

module.exports = adminGuard;
