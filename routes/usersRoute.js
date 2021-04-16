const express = require("express");
const { addUser, userLogin } = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(addUser);
router.route("/login").post(userLogin);

module.exports = router;
