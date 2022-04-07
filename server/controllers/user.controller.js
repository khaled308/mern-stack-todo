const User = require('../models/user')

exports.addTask = async(req,res)=>{
    // this code will be replaced after make auth

    const all = await User.find()
    let tasks = []
    if(all.length){
        tasks = await  User.findOne(all[0]._id).then(user=>{
            user.tasks.push(req.body)
            return user.save()
    })
    }
    else{
        const user = await new User({tasks : [req.body]})
        tasks = user.save()
    }
    console.log(tasks)
    res.status(200).send(tasks)
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

exports.deleteTask = async(req,res)=>{
    const task = await User.findOne()
    .then(user=>{
        user.tasks.pull(req.params.id)
        return user.save()
    })
    res.status(200).send(task)
}
