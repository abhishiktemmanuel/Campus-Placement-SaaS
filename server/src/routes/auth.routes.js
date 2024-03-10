const express = require("express");
const router = express.Router();
const { admin, setCustomUserClaims } = require("../utils/firebaseAdmin.js");

// Endpoint to set a user's role
router.post("/setUserRole", async (req, res) => {
  const { uid, role } = req.body;
  try {
    await setCustomUserClaims(uid, role);
    res.status(200).json({ message: "User role set successfully" });
  } catch (error) {
    console.error("Error setting user role:", error);
    res.status(400).json({ message: "Error setting user role" });
  }
});

// Endpoint to verify the Firebase ID token and check user role
router.post("/verifyToken", async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const user = await admin.auth().getUser(uid);
    const userRole = user.customClaims?.role;

    if (!userRole) {
      return res.status(403).json({ message: "User role not assigned" });
    }

    res
      .status(200)
      .json({ uid, role: userRole, message: "Token and role verified" });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    res.status(401).json({ message: "Unauthorized - Invalid ID token" });
  }
});

module.exports = router;
