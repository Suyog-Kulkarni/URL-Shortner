const User = require('../models/user');

async function getAllUsers(req,res){
    const allUsers = await User.find({});
    return res.json(allUsers);
}

async function createUser(req,res){

    const body = req.body;

    if(!body || !body.first_n || !body.email || !body.last_name || !body.job_title || !body.gender){
        return res.status(400).json({error:'Please provide all the details'});
    }

    const result = await User.create({
        firstName: body.first_n,
        lastName: body.last_name,
        email:body.email,
        gender:body.email,
        jobTitle:body.job_title,
    })

    return res.status(401).json({msg:"Success"})

}

module.exports = {
    getAllUsers,
    createUser
}