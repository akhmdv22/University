const EmployeeService = require('../Services/Employee');
const employeeService = new EmployeeService();
const employeeErrors = require('../errorMessages/ErrorMsg');

module.exports = class EmployeeController {

    async CreateEmployee(req, res, next) {
        try {
            const employee = req.body;
            const result = await employeeService.CreateEmployee(employee);

            if (result) {
                res.json(result);
            } else {
                next({ status: 400, message: "Employee could not be created." });
            }
        } catch (error) {
            next({ status: employeeErrors[error.message]?.status || 500, message: employeeErrors[error.message]?.message || "Server Error" });
        }
    }

    async GetAllEmployees(req, res, next) {
        try {
            const results = await employeeService.GetAllEmployees();
            if (results) {
                res.json(results);
            } else {
                next({ status: 404, message: "No employees found." });
            }
        } catch (error) {
            next({ status: employeeErrors[error.message]?.status || 500, message: employeeErrors[error.message]?.message || "Server Error" });
        }
    }

    async GetEmployeeById(req, res, next) {
        try {
            const id = req.query.id;
            const result = await employeeService.GetEmployeeById(id);
            if (result) {
                res.json(result);
            } else {
                next({ status: 404, message: "Employee not found." });
            }
        } catch (error) {
            next({ status: employeeErrors[error.message]?.status || 500, message: employeeErrors[error.message]?.message || "Server Error" });
        }
    }

    async DeleteEmployeeById(req, res, next) {
        try {
            const id = req.query.id;
            const result = await employeeService.DeleteEmployeeById(id);
            if (result) {
                res.json({ message: "Employee successfully deleted!" });
            } else {
                next({ status: 404, message: "Employee not found." });
            }
        } catch (error) {
            next({ status: employeeErrors[error.message]?.status || 500, message: employeeErrors[error.message]?.message || "Server Error" });
        }
    }

    async UpdateEmployee(req, res, next) {
        try {
            const id = req.query.id;
            const employee = req.body;
            const result = await employeeService.UpdateEmployee(id, employee);

            if (result) {
                res.json(result);
            } else {
                next({ status: 404, message: "Employee could not be updated." });
            }
        } catch (error) {
            next({ status: employeeErrors[error.message]?.status || 500, message: employeeErrors[error.message]?.message || "Server Error" });
        }
    }
}
