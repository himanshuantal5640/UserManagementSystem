const { users } = require("../data/users");
const {
  createUser: createUserService,
  deleteUserService,
  updateUserService,
} = require("../service/user.service");

// GET ALL USERS
const getUser = (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

// GET USER BY ID
const getUserById = (req, res) => {
  try {
    const { id } = req.body;
    const user = users.find((user) => user.id === id);
    console.log(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE USER
const createUser = (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = createUserService(name, email);

    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE USER
const updateUser = (req, res) => {
  try {
    const { id, name, email } = req.body;

    const updatedUser = updateUserService(id, name, email);

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE USER
const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const isDeleted = deleteUserService(id);

    if (!isDeleted) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
