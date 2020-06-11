const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, mail, git) {
      super(name, id, mail,git, "Engineer");
      this.git = git;
    }

    getRole() {
        return "Engineer";
    }
      getGithub() {
        return this.git;
      }
}

module.exports = Engineer;