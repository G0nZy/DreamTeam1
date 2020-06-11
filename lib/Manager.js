const Employee = require('../lib/Employee');
            class Manager extends Employee {
                constructor(name,office,id,mail){
                    super(name,office,id,mail);
                    this.office=office;
                }
            
getRole() {
    return "Manager";
}
getOffice() {
    return this.office;
}}
module.exports=Manager