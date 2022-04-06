const User = require('../models/user')

exports.addTask = async(req,res)=>{
    // this code will be replaced after make auth

    const all = await User.find()
    
    let userTasks =  []
    if(all.length){
        userTasks = all[0].tasks
        userTasks.push(req.body)
        await User.updateOne({tasks : userTasks })
    }
    else{
        const user = await new User({tasks : [req.body]})
        user.save()
    }
    res.status(200).send({status : 'ok'})
}

exports.getAll = async(req,res)=>{
    // this code will be replaced after authentication
    const all = await User.find()
    
    let userTasks =  []
    if(all.length){
        userTasks = all[0].tasks
        return res.status(200).send({status:'ok',data:userTasks})
    }
        return res.status(200).send({status:'ok',data:[]})
    
}

exports.updateTask = async(req,res)=>{
    const task = await User.findOne().then(user=>{
        let taskObj = user.tasks.filter(task=>task._id == String(req.params.id))[0]
        taskObj.completed = req.body.completed
        return user.save()
    })
    res.status(200).send(task)
}