import { mongo } from 'mongoose'
import Data from '../Database/workshopSchema.js'
import mongodb from 'mongodb'
export const getWorkshop = async(req,res) =>{
    try {
        const details = await Data.find({})
        res.status(200).json(details)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const createWorkshop = async(req,res) =>{
    try {
        const oldData = req.body
        const data = new Data(oldData)
        await data.save()

        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const deleteWorkshop = async(req,res) =>{
    try {
        const id = req.params.id
        let result = await Data.deleteOne({_id:new mongodb.ObjectId(id)})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getWorkshopByid = async(req,res) =>{
    try {
        const id = req.params.id
        const result = await Data.findById({_id:new mongodb.ObjectId(id)})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const updateWorkshop = async(req,res) =>{
    try {
        const id = req.params.id
        const name = req.body.data.name
        const venue = req.body.data.venue
        const type = req.body.data.type
        const url = req.body.data.url
        const date = req.body.data.date
        const result = await Data.findByIdAndUpdate(
            {_id:new mongodb.ObjectId(id)},
            {
                $set : {
                    name: name,
                    venue: venue,
                    type: type,
                    url:url,
                    date:date
                }
            }
            )
        console.log("Done")
        console.log(id,name)
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}