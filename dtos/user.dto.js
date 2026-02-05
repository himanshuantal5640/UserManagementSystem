const validateCreateUserDTO = (req,res,next)=>{
    console.log("Using DTO to check data validity")
    const {name,email} = req.body;
    if(!name ||  !email){
        return res.status(400).json({
            success: false,
            message:"Name and email is required "
        });
    }
    next();
};

module.exports = {validateCreateUserDTO}