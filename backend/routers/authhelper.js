const jwt  = require('jsonwebtoken');
const jwtkey = "sndngu859hguo34gd";

// function protectroute(req,res,next){
//     if(req.cookies.login){
//         let isverified = jwt.verify(req.cookies.login,jwtkey);
//         if(isverified){
//             next();
//         }
//         else{
//             return res.json({
//                 message:"user not verified"
//             });
//         }
//     }
//     else{
//         return res.json({
//             message:'operation not allowed'
//         });
//     }
// } 

module.exports = protectroute;