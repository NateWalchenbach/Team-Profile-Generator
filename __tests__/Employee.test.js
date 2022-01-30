const Employee = require("../lib/Employee");
describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee("Nate", 1, "natewalchenbach24@gmail.com");
  });

  describe("getName", () => {
    it("you got the name!", () => {
      const printedName = employee.getName();
      expect(printedName).toBe("Nate");
    });
  });
  describe("getId", () => {
    it("You got the ID", () => {
      const printedId = employee.getId();
      expect(printedId).toBe(1);
    });
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedId = employee.getId();
      expect(printedId).toBe("Employee");
    });
  });
});
