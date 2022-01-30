const Intern = require("../lib/Intern");

module.exports = class intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
  getGithub() {
    return this.github;
  }
};
