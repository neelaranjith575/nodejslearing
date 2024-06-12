import express from 'express';
import * as employeeDataController from "../controllers/employeeData.controller.js"

const router = express.Router();


router.get ('/employees' , employeeDataController.getemployeesData);
router.post('/create/employee', employeeDataController.createEmployeeData);
router.put('/employee/:roll/update', employeeDataController.updateEmployeeData);
router.delete('/employee/:roll/delete', employeeDataController.deleteEmployeeData);


export default router;