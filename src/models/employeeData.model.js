
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
const employeeData = mongoose.model('employeeData', employeeDataSchema)

export default employeeData ;