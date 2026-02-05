const { users } = require("../data/users");

// CREATE USER
const createUser = (name, email) => {
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
  };

  users.push(newUser);
  return newUser;
};

// DELETE USER
const deleteUserService = (id) => {
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
};

// UPDATE USER
const updateUserService = (id, name, email) => {
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) return null;   // important fix

  if (name) users[index].name = name;
  if (email) users[index].email = email;

  return users[index];  // better: return updated user only
};

module.exports = {
  createUser,
  deleteUserService,
  updateUserService,
};
