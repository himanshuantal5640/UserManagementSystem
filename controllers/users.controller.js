const {users} = require("../data/users.js")

const getUsers = (req,res)=>{
    res.status(200).json({
        success:true,
        count: users.length,
        data : users
    })
}
const createUser = (req,res)=>{
    try{
        const {name,email} = req.body;
        //validation
        if(!name || !email){
            return res.status(400).json({
                success:false,
                message: "Name and Email are required"
            })
        }
        const newUser = {
            id: Date.now().toString(),
            name,
            email
        }
        users.push(newUser);
        res.status(201).json({
            success:true,
            data: newUser
        });
    } catch(err){
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
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

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
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

    const deletedUser = users.splice(index, 1);

    return res.status(200).json({
      success: true,
      data: deletedUser[0]
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


module.exports = {getUsers, createUser,updateUser,deleteUser}