// const express = require("express");

// const {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser
// } = require("../controllers/users.controller.js");

// const { checkAuth, validateUserId, validateZod } = require("../middleware/auth.js");
// const { validateCreateUserDTO } = require("../dtos/user.dto.js");
// const { createUserSchema, updateUserSchema } = require("../dtos/user.zod.js");

// const router = express.Router();

// router.get("/", checkAuth, getUsers);
// router.post("/", validateZod(createUserSchema), createUser);
// router.patch("/:id", validateZod(updateUserSchema), updateUser);
// router.delete("/:id", deleteUser);

// module.exports = router;

const express = require("express");

const {
  getUser,
  getUserById,
  getUserByActive,
  createUser,
  updateUser,
  updateDetailsByEmail,
  deleteUser,
  deleteByEmail,
} = require("../controllers/users.controller.js");

const {
  checkAuth,
  validateUserId,
  validateUser,
  validateUserById,
  tokenVerify,
} = require("../middleware/auth.js");

const router = express.Router();

router.get("/", tokenVerify, checkAuth, getUser);
router.get("/active", getUserByActive);
router.get("/id", validateUserById, getUserById);
router.post("/", validateUser, createUser);
router.put("/update", validateUserId, updateUser);
router.put("/update-password", updateDetailsByEmail);
router.delete("/delete-email", deleteByEmail);
router.delete("/:id", validateUserId, deleteUser);

module.exports = router;


