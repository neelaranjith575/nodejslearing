import express from 'express';
import * as employeeDataController from "../controllers/employeeData.controller.js"

const router = express.Router();


router.get ('/' , employeeDataController.getemployeesData);
router.post('/create', employeeDataController.createEmployeeData);
router.get('/:id/details', employeeDataController.getEmployeeByID);
router.put('/:id/update', employeeDataController.updateEmployeeData);
router.delete('/:id/delete', employeeDataController.deleteEmployeeData);


export default router;