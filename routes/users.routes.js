const express = require('express');
const {getUsers, createUser,updateUser,deleteUser, getUserId} = require("../controllers/users.controller.js");
const { checkAuth, validateUserId} = require('../middleware/auth.js');

const router = express.Router();
router.get('/',checkAuth,getUsers);
router.post('/',createUser);
router.patch('/:id',validateUserId,updateUser);
router.delete('/:id',deleteUser);
// router.get('/:id',getUserById,getUserId);


module.exports = router;