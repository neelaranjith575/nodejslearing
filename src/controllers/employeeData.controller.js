import employeeData from "../models/employeeData.model.js";



// Get All Employees Data

export const getemployeesData = async (req, res) => {
    try {
        const employeeData = await employeeData.find();
        console.log("data123", employeeData);
        res.status(200).json(employeeData, { message: "Employees Fetched successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



// create API

export const createEmployeeData = async(req, res) =>{
    try {
    const { name, employeeID, age, role} = req.body;
    const newEmployee = new newEmployee({name, employeeID, age, role });
     console.log("newEmployee", newEmployee)
        await newEmployee.save();
        res.status(201).json(newEmployee,  { message: "Employee Created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Update API


export const updateEmployeeData = async (req, res) => {
    const employeeID = req.params.employeeID;
    try{
        const updateEmployee = await employeeData.findOneAndUpdate({ employeeID: employeeID }, req.body, { new: true });
        res.status(200).json(updateEmployee, { message: "Employee Updated successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// Delete API

export const deleteEmployeeData = async (req, res) =>{
    const employeeID = req.params.employeeID;
    try{
        const deleteEmployee = await employeeData.findOneAndDelete({employeeID: employeeID})
        res.status(204).json(deleteEmployee, {message:'Employee Deleted successfully'})
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
}