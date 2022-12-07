const User = require('../models/User.js');

//endpoints

//find all data.
const findAllUser = (req, res)=>{
    User.find((err, users)=>{
        err && res.send(500).send(err.message);
        res.status(200).json(users)
    });
}
//find one
const findById = (req, res) =>{
    User.findById(req.params.id,(err ,user)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(user);
    })
}
//add users
const postUsers = (req, res)=>{
    let user = new User({
        tarea: req.body.tarea
    });
    user.save((err, usr) =>{
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
    });
}

//delete by id
const deleteUser =(req,res)=>{
    User.findByIdAndDelete(req.params.tarea,(err,user)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(user);
    })
}



module.exports={findAllUser, findById, postUsers, deleteUser};