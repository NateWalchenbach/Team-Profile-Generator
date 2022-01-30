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
});
