const express = require("express");

const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

const {
  checkAuth,
  validateUserId,
  validateUser,
  validateUserById,
  tokenVerify,
} = require("../middlewares/auth");

const router = express.Router();

// ROUTES
router.get("/", tokenVerify, checkAuth, getUser);
router.get("/id", validateUserById, getUserById);
router.post("/", validateUser, createUser);
router.put("/update", validateUserId, validateUser, updateUser);
router.delete("/:id", validateUserId, deleteUser);

module.exports = router;
