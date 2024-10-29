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
        const result = await EmployeeModel.findByIdAndDelete(id);
        if(result){
            return result
        }else{
            throw new Error('notFound');
        }
    }

    async UpdateEmployee(id, updatedEmployee){
       const result = await EmployeeModel.findByIdAndUpdate(id, updatedEmployee, {new: true});

        if(result){

            return result
        }else{
            throw new Error('notFound');
        }
    }
}
