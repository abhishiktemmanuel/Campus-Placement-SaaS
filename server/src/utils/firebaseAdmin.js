const admin = require("firebase-admin");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(
    require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  ),
});

const setCustomUserClaims = async (uid, role) => {
  if (!["company", "student", "collegeAdmin"].includes(role)) {
    throw new Error("Invalid role");
  }
  await admin.auth().setCustomUserClaims(uid, { role });
};

module.exports = { admin, setCustomUserClaims };
