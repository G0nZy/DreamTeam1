class Employee {
  constructor(name, id, mail, role) {
    this.name = name;
    this.id = id;
    this.mail = mail;
    this.role = role;
  }

  getName() {
    return this.name;
  } 
  getId() {
    return this.id;
  } 
  getEmail() {
    return this.mail;
  } 
  getRole() {
    return "Employee";
  }
}


module.exports = Employee;