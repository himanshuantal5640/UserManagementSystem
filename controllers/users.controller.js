const { users } = require("../data/users.js");
const { createUserService } = require("../services/user.services.js");

const getUsers = (req, res) => {
  const { token } = req.headers;
  console.log("req", req);
  console.log("token", token);

  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
};

const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    users.splice(index, 1);

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const createUser = (req, res) => {
  const { email, name } = req.body;

  const userBody = createUserService(name, email);

  res.status(201).json({
    success: true,
    data: userBody
  });
};

module.exports = {
  getUsers,
  updateUser,
  deleteUser,
  createUser
};
