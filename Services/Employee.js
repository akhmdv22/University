const EmployeeModel = require('../Models/Employee');

module.exports = class EmployeeService {

    async CreateEmployee(employee){

        const employeeToAdd = new EmployeeModel(employee);
        return await employeeToAdd.save();
    }

    async GetAllEmployees(){
        return await EmployeeModel.find({});
    }

    async GetEmployeeById(id){
        return await EmployeeModel.findById(id);
    }
    async DeleteEmployeeById(id){
        return await EmployeeModel.findByIdAndDelete(id);
    }

    async UpdateEmployee(id, updatedEmployee){
        return await EmployeeModel.findByIdAndUpdate(id, updatedEmployee, {new: true});
    }
}
