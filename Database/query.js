const squel = require("squel");

    // employeeView();
function employeeView() {
    log( '' + squel.select().from("employee") ); 
}

    // deptView();
function deptView() {
    log( '' + squel.select().from("department") ); 
}
 
    // rolesView();
function rolesView() {
    log( '' + squel.select().from("role") ); 
}

    // deptSalaryView();

    // empmanagerView();

    // addDept();

    // addRoles();

    // addEmployees();

    // updateEmployeeRoles();

    // updateEmployeeManagers();

    // delDept();

    // delRoles();

    // delEmployees();

    module.exports = query;