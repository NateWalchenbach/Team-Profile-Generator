const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  let engineer;
  beforeEach(() => {
    engineer = new Engineer(
      "Nate",
      1,
      "natewalchenbach24@gmail.com",
      "natewalchenbach"
    );
  });
  describe("getGithub", () => {
    it("you got the github username!", () => {
      const result = engineer.getGithub();
      expect(result).toBe("natewalchenbach");
    });
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedId = engineer.getRole();
      expect(printedId).toBe("Engineer");
    });
  });
});
