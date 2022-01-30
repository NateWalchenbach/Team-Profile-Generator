// Create class
// Class must have name, id, email, getName(), getID(), getEmail(), getRole()

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // put methods

  role = "Employee";

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
}

module.exports = Employee;
