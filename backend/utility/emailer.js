const nodemailer = require("nodemailer"); 
  
 const pass = "zsrjwgvaiylqqluy"; 
 const email="vaishal0508@gmail.com"; 
 var transporter = nodemailer.createTransport({ 
  service:"Gmail", 
 auth:{ 
    user:email, 
    pass:pass 
    } 
    }); 
  
 transporter.verify((err) =>{ 
    if(err){ 
    console.log(err); 
    }else{ 
        console.log("Server is ready to send messages"); 
    } 
 }); 
  
 module.exports = transporter;

//                         console.log(`Message sent ${info.messageId}`); 
//                     }); 
//                     res.status(201).json({ message: "data stored successfully" }); 









//   var subject, text, Ohtml;

//   if (str == "feedback") {
//     subject = `Thank you for review ${data.name}`;
//     Ohtml = `
//         <h1>Welcome to CruiseHub</h1>
//         hope you had a good time !
//     `;
//   }

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"CruiseHub 🚢" <vaishal0508@gmail.com>', // sender address
//     to: data.email, // list of receivers
//     subject: subject, // Subject line
//     // text: "Hello world?", // plain text body
//     html: Ohtml, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };