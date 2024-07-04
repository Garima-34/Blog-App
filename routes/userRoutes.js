const express = require("express");
//const { getAllusers } = require("../contollers/userContoller");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

//router objectnpm 
const router = express.Router();

// GET ALL USERS || GET
router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

module.exports = router;