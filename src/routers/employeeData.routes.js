import express from 'express';
import * as employeeDataController from "../controllers/employeeData.controller.js"

const router = express.Router();


router.get ('/employees' , employeeDataController.getemployeesData);
router.post('/create/employee', employeeDataController.createEmployeeData);
router.put('/employee/:employeeID/update', employeeDataController.updateEmployeeData);
router.delete('/employee/:employeeID/delete', employeeDataController.deleteEmployeeData);


export default router;