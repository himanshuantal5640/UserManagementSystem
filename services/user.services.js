const { user: User } = require("../models/users.js");

const getUsersService = async () => {
  return User.find();
};

const getUserByIdService = async (id) => {
  return User.findById(id);
};

const getUserByActiveService = async () => {
  return User.find({ isActive: true });
};

const createUser = async (name, email, password, role, isActive) => {
  const newUser = new User({
    name,
    email,
    password,
    role,
    isActive,
  });

  return newUser.save();
};

const deleteUserService = async (id) => {
  const deletedUser = await User.findByIdAndDelete(id);
  return deletedUser !== null;
};

const updateUserService = async (
  id,
  name,
  email,
  password,
  role,
  isActive
) => {
  const updatePayload = {};
  if (name) updatePayload.name = name;
  if (email) updatePayload.email = email;
  if (password) updatePayload.password = password;
  if (role) updatePayload.role = role;
  if (isActive !== undefined) updatePayload.isActive = isActive;

  return User.findByIdAndUpdate(id, updatePayload, {
    new: true,
    runValidators: true,
  });
};

const updateDetailsByEmailService = async (email, password) => {
  const updatePayload = {};
  if (password) updatePayload.password = password;

  return User.findOneAndUpdate({ email: email }, updatePayload, {
    new: true,
    runValidators: true,
  });
};

const deleteByEmailService = async (email) => {
  const deletedUser = await User.findOneAndDelete({ email: email });
  return deletedUser !== null;
};

module.exports = {
  getUsersService,
  getUserByIdService,
  getUserByActiveService,
  createUser,
  deleteUserService,
  updateUserService,
  updateDetailsByEmailService,
  deleteByEmailService,
};
