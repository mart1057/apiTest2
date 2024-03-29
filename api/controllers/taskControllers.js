const mongoose = require('mongoose');
const task = mongoose.model('task');

exports.list_all_tasks = (req,res)=>{
    task.find({},(err,tasks)=>{
        if(err) res.send(err);
        res.json(tasks)
    })
}

exports.create_a_task = (req,res) =>{
    console.log(req.body);
    const newTask = new task(req.body);
    newTask.save((err, task)=>{
        if(err) res.send(err);
        res.json(task)
    })
}

exports.read_a_task = (req,res) =>{
    task.findById(req.params.taskId,(err, task) =>{
        if(err) res.send(err);
        res.json(task)
    })
}

exports.update_a_task = (req,res) =>{
    task.findOneAndUpdate(
        {_id: req.params.taskId},
        req.body,
        {new:true},
        ((err,task)=>{
            if(err) res.send(err);
            res.json(task)
        })
    )
}

exports.delete_a_task = (req,res) =>{
   task.deleteOne( {_id: req.params.taskId},err=>{
    if(err) res.send(err);
    res.json({
        message:'task succesfBody.json(): Promise<any>',
        _id: req.params.taskId
    })

   })
}



