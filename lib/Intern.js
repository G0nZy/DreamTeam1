const Employee = require("../lib/Employee");
  class Intern extends Employee {
    constructor(name, school, id, mail,git) {
      super(name, school,id , mail, git, "Intern");
      this.school = school;}
getRole() {return "Intern";}
      getSchool() {
        return this.school;
      }
}

module.exports = Intern;