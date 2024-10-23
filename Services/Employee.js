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
        const result = await EmployeeModel.findById(id);
        if(result){
            return result
        }else{
            throw new Error('notFound');
        }
    }
    async DeleteEmployeeById(id){
        return await EmployeeModel.findByIdAndDelete(id);
    }

    async UpdateEmployee(id, updatedEmployee){
        return await EmployeeModel.findByIdAndUpdate(id, updatedEmployee, {new: true});
    }
}
