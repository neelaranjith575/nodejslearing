
import mongoose from 'mongoose';

const employeeDataSchema = new mongoose.Schema(
    {
        name : {
            type:String,
            required:true
        },
        employeeID:{
            type:String,
            required:true,
            unique: true,
        },

        age: {
            type:Number,
            required: true,
        },

        role: {
            type: String,
            required: true,
        },
        


    }
);
const employee = mongoose.model('Employee', employeeDataSchema)

export default employee ;