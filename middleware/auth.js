
let success = true;
const checkAuth = (req,res,next)=>{
    if(success){
        console.log("Auth Checked");
        next();
    }
    else{
        console.log("Auth Failed");
        return res.status(400).json({
            success:false,
            message:"Autorization Failed"
        })
    }
};

const validateUserId = (req,res,next)=>{
    const {id} = req.params;
    if(!id || id.length < 5){
        return res.status(400).json({
            success:false,
            message:"Inavlid User ID"
        });
    }
    console.log("Id verified");
    next();

};
// const validateEmailName = (req,res,next)=>{
//     const {name,email} = req.body;
//     if(!name || !email){
//         return res.status(400).json({
//             success:false,
//             message:"Invalid Name or Email",
//         });
//     }
//     console.log("Name and Email is Verified");
//     next();
    
// }

// const getUserById = (req, res, next) => {
//   const { id } = req.body;

//   if (!id) {
//     return res.status(400).json({
//       success: false,
//       message: "User id is required in body"
//     });
//   }
//   console.log("Id verified");
//   next();
// };

module.exports = {checkAuth,validateUserId}