const usermodel = require('../models/usermodel');
const contactmodel = require('../models/contactmodel');
module.exports.getUser = async function getUser(req, res) {
    let id = req.params.id;
    let user = await usermodel.findById(id);
    if (user) {
        res.json({
            message: 'info of user',
            data: user
        });
    }
    else {
        return res.json({
            message: 'users not found'
        });
    }
};

module.exports.postUser = function postUser(req, res) {
    console.log(req.body);
    users = req.body;
    res.json({
        message: "data recieved succesfully",
        user: req.body
    });
};

module.exports.contactform =  function contactform(req,res){
    try{
        const subject = req.body.subject;
        const fullname = req.body.fullname;
        const email = req.body.email;
        res.json({
            subject:subject,
            message:`please cooperate to us ${fullname} we will contact you through your email ${email}`
        });
    }
    catch(err){
        res.json({
            message:"error while contacting"
        });
    }
}

module.exports.updateUser = async function updateUser(req, res)  {
    // console.log('req->body', req.body);
    try {
        let id = req.params.id;
        let user = await usermodel.findById(id);
        let datatobeupdated = req.body;
        if (user) {
            const keys = [];
            for (let key in datatobeupdated) {
                keys.push(key);
            }

            for (let i = 0; i < keys.length; i++) {
                user[keys[i]] = datatobeupdated[keys[i]];
            }
            const updateddata = await user.save();
            res.json({
                message: "data updated succesfully",
                data:user
            });
        }
        else {
            res.json({
                message: "user not found"
            });
        }
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // let user1 = await usermodel.findOneAndUpdate(,datatobeupdated);
    // // for (key in datatobeupdated) {
    //     users[key] = datatobeupdated[key];
    // }
}

module.exports.deleteUser = async function deleteUser(req, res) {   
   try{
    let id = req.params.id;
   let user = await usermodel.findOneAndDelete(id); 
   if(!user){
    res.json({
        message:'user not found'
    })
   }
   res.json({
        message: "data has been deleted",
        data:user
    });
}
catch(err){
    res.json({
        message:err
    })
}
}

module.exports.getAllUser = async function getAllUser(req, res) {
   try{
    let users = await usermodel.find();
    if(users){
        res.json({
            message:'users retrieved',
            data:users
        });
    }
    res.send("user id received");
}

catch(err){
    res.json({
        message:err
    });
}
}
// function setCookies(req,res)
// {
//     // res.setHeader('set-cookie','isLoggedin=true');
//     // res.send('cookies has been set');
//     res.cookie('isLoggedIn',true,{maxAge:1000*60*60*24,secure:true,httpOnly:true});
//     res.send('cookies has been set');
// }

// function getCookies(req,res){
//     let cookies = req.cookies.isLoggedIn;
//    console.log(cookies);
//    res.send('cookies received');
// }
