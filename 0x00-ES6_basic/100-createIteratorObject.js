import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './createReportObject.js';
import createIteratorObject from './createIteratorObject.js';

const employeesList = createEmployeesObject("Engineering", ["John Doe", "Guillaume Salva"]);
const report = createReportObject(employeesList);
const iterator = createIteratorObject(report);

for (const employee of iterator) {
  console.log(employee);
}
