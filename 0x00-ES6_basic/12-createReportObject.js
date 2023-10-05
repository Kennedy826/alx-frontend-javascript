import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './createReportObject.js';

const employeesList = createEmployeesObject("Engineering", ["John Doe", "Guillaume Salva"]);

const report = createReportObject(employeesList);

console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(employeesList));

