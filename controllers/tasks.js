const Task = require('../model/Task')
const mongoose = require("mongoose")
const asyncWrapper = require('../middleware/async-wrapper')

module.exports.getAllTasks = asyncWrapper( async (req, res) => {
        var data =  await Taskk.find({})
        return res.status(201).send(data)   
    })


module.exports.postSingleTask = asyncWrapper( async(req, res)=>{
        Task.create([{description:req.body.name, completed: req.body.completed}], (err)=>{
            if(err) return res.status(400).send({message:"Invalid input"})
            return res.status(201).send({message:"Success"})
        })
    }
    )

module.exports.getSingleTask = asyncWrapper( async(req, res)=>{
            if(mongoose.Types.ObjectId.isValid(req.params.id)){
                await Task.findOne({ _id : req.params.id}).then((data)=>{
                    return res.status(201).send(data)
                }).catch(err=>{
                    return res.status(201).send({response: "Data Not found!"})
                })
            }
            else{
                return res.status(201).send({response: "Wrong ID provided"})
            }
    }
)

module.exports.updateTasks = asyncWrapper(
    async(req,res)=>{
            if(mongoose.Types.ObjectId.isValid(req.query.id))
            Task.findOneAndUpdate({ _id : req.query.id}, {description : req.body.description}, {
                new :  true,
                runValidators: true
            }).then((data)=>{
                return res.status(201).send(data)
            }).catch(err=>{
                console.log(err)
                return res.status(404).send({response: "Error generated while updating the data"})
            })
    }
) 

module.exports.deleteTask = asyncWrapper(
    async(req, res)=>{
            if(mongoose.Types.ObjectId.isValid(req.query.id)){
                Task.findOneAndDelete({ _id : req.query.id}).then((data)=>{
                    if(data == null){
                        return res.status(200).json({response: "data doesn't exist"})
                    }
                    return res.status(200).json({data})
                }).catch(err=>{
                    res.status(404).json({
                        error : "Invalid id"
                    })
                })
            }
            else{
                res.status(404).send({error : "Invalid ID"})
            }
    }
)





