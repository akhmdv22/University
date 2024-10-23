const express = require('express');
const router = express.Router();
const EmployeeController = require('../Controller/Employee');
const employeeController = new EmployeeController();
const EmployeeValidator = require('../validations/Employee');
const {validate} = require('express-validation');


router.post('/employee/create', validate(EmployeeValidator.createORupdateEmployeeValidator), employeeController.CreateEmployee);
router.get('/employee/all', employeeController.GetAllEmployees);
router.get('/employee/employeeByID', employeeController.GetEmployeeById);
router.delete('/employee/delete', employeeController.DeleteEmployeeById);
router.put('/employee/update', validate(EmployeeValidator.createORupdateEmployeeValidator), employeeController.UpdateEmployee);
module.exports = router;