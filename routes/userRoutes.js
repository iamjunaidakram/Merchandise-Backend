const express = require("express");
const { Register, login , getUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", Register);
router.post("/login", login);
router.get("/getUser", getUser);

module.exports = router;
