const Employee = require("./Employee");

module.exports = class intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  getGithub() {
    return this.github;
  }
};
