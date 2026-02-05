const express = require("express");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/user.controller.js");

const { checkAuth, validateUserId, validateZod } = require("../middlewares/auth.js");
const { validateCreateUserDTO } = require("../dtos/user.dto.js");
const { createUserSchema, updateUserSchema } = require("../dtos/user.zod.js");

const router = express.Router();

router.get("/", checkAuth, getUsers);
router.post("/", validateZod(createUserSchema), createUser);
router.patch("/:id", validateZod(updateUserSchema), updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
