const express = require("express");
const router = express.Router();

const { userController } = require("../controllers/userControllers");
const { auth } = require("../middlewares/auth");



router.post("/register", userController.register);
router.post("/activation", userController.activate);
router.post("/signin", userController.signin);
router.post("/access", userController.access);
router.post("/forgot_pass", userController.forgot);
router.post("/reset_pass", auth, userController.reset);
router.get("/user", auth, userController.info);
router.patch("/user_update", auth, userController.update);
router.get("/signout", userController.signout);
router.post("/google_signin", userController.google);

module.exports = router;