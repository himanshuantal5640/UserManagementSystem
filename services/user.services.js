const { users } = require("../data/users");

// DELETE
const deleteUserService = (id) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;

  users.splice(index, 1);
  return true;
};

// CREATE
const createUserService = (name, email) => {
  if (!name || !email) {
    return { error: "Name and Email are required" };
  }

  const exists = users.some(u => u.email === email);
  if (exists) {
    return { error: "Email already exists" };
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email
  };

  users.push(newUser);
  return newUser;
};

// GET BY ID
const getUserByIdService = (id) => {
  if (!id) return null;

  const user = users.find(u => u.id === id);
  return user || null;
};

// UPDATE (PUT/PATCH)
const updateUserService = (id, name, email) => {
  const user = users.find(u => u.id === id);

  if (!user) {
    return { error: "User not found" };
  }

  if (name) user.name = name;
  if (email) user.email = email;

  return user;
};

module.exports = {
  deleteUserService,
  createUserService,
  getUserByIdService,
  updateUserService
};
