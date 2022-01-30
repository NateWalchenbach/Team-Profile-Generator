const Manager = require("../lib/Manager");
describe("Intern", () => {
  let manager;
  beforeEach(() => {
    manager = new Manager(
      "Nate",
      1,
      "natewalchenbach24@gmail.com",
      "natewalchenbach"
    );
  });
});
describe("getRole", () => {
  it("You got the Role", () => {
    const printedRole = employee.getRole();
    expect(printedRole).toBe("Manager");
  });
});
