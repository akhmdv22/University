const express = require('express');
const router = express.Router();
const EmployeeController = require('../Controller/Employee');
const employeeController = new EmployeeController();
const EmployeeValidator = require('../validations/Employee');
const {validate} = require('express-validation');
const { adminRole } = require('../middlewares/auth');

router.post('/employee/create', adminRole, validate(EmployeeValidator.createORupdateEmployeeValidator), employeeController.CreateEmployee);
router.get('/employee/all', employeeController.GetAllEmployees);
router.get('/employee/employeeByID', employeeController.GetEmployeeById);
router.delete('/employee/delete', adminRole, employeeController.DeleteEmployeeById);
router.put('/employee/update', adminRole, validate(EmployeeValidator.createORupdateEmployeeValidator), employeeController.UpdateEmployee);
module.exports = router;