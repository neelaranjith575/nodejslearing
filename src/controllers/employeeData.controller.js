import Employee from "../models/employeeData.model.js";



// Get All Employees Data

export const getemployeesData = async (req , res) => {
    try {
        const employeeData = await Employee.find();
        // console.log("data123", employeeData);
        return res.status(200).json({employeeData, success: true,  message: "Employees Fetched successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



// create API

export const createEmployeeData = async (req, res) => {

    try {
    const newEmployee = new Employee({
        name: req.body.name,
        employeeID: req.body.employeeID,
        age: req.body.age,
        role: req.body.role
    });
        const employee = await newEmployee.save();
        // console.log(employee, "employee created");
        res.status(201).json({employee, success: true,  message: "Employee Created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



export const getEmployeeByID = async (req, res) => {
    const employeeID = req.params.id;
    try {
        const employee = await Employee.findById(employeeID); 
        if (!employee) {
            return res.status(404).json({ message: "Cannot find employee" });
        }
        // console.log('EmployeeDetails', employee);
        return res.json(employee);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


  //Update API


export const updateEmployeeData = async (req, res) => {
    try {
        const updateEmployee = await Employee.findOneAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                employeeID:req.body.employeeID,
                age: req.body.age,
                role: req.body.role
            },
            { new: true });
            // console.log('updateEmployee', updateEmployee);
        res.status(200).json({updateEmployee, success: true,  message: "Employee Updated successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// Delete API

export const deleteEmployeeData = async (req, res) => {
    const employeeID = req.params.id;
    try {
        const deleteEmployee = await Employee.findOneAndDelete({ _id: employeeID })
        res.json({deleteEmployee, success: true,  message: "Employee Deleted successfully" })
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}