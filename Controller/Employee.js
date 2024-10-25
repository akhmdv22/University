const EmployeeService = require('../Services/Employee');
const employeeService = new EmployeeService();
const employeeErrors = require('../errorMessages/Employee');

module.exports = class EmployeeController {

    async CreateEmployee(req, res, next){
        let employee = req.body;
        const result = await employeeService.CreateEmployee(employee);

        if (result){
            res.json(result);
        } else {
            res.send('error');
        }
    }
    async GetAllEmployees(req, res, next){
        const results = await employeeService.GetAllEmployees();

        if (results) {
            res.json(results);
        } else {
            res.send('error');
        }
    }
    async GetEmployeeById(req, res, next){
        try{
            const id = req.query.id
            const result = await employeeService.GetEmployeeById(id);  
            res.json(result); 
        } catch (error) {
            next({status: employeeErrors[error.message]?.status, message: employeeErrors[error.message]?.message});
        }

    }

    async DeleteEmployeeById(req, res, next){
        try {
            const id = req.query.id
            const result = await employeeService.DeleteEmployeeById(id);
            res.send('Xodim bazadan olib tashlandi!'); 
        } catch(error){
            next({status: employeeErrors[error.message]?.status, message: employeeErrors[error.message]?.message});
        }
    }

    async UpdateEmployee(req, res, next){
        try{
            const id = req.query.id
            const employee = req.body
            const result = await employeeService.UpdateEmployee(id, employee);
            res.json(result);
        }catch(error){
            next({status: employeeErrors[error.message]?.status, message: employeeErrors[error.message]?.message});
        }
    }

}