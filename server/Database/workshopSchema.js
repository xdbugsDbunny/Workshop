import mongoose from "mongoose";


const workshopSchema = new mongoose.Schema({
    name: String,
    type: String,
    venue: String,
    url:String,
    date:String
});


const Data =mongoose.model('workshops',workshopSchema)

export default Data;