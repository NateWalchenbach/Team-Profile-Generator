const Engineer = require("../lib/Intern");
describe("Intern", () => {
  let intern;
  beforeEach(() => {
    intern = new Engineer(
      "Nate",
      1,
      "natewalchenbach24@gmail.com",
      "natewalchenbach"
    );
  });
  describe("getGithub", () => {
    it("you got the github username!", () => {
      const result = intern.getGithub();
      expect(result).toBe("natewalchenbach");
    });
  });
});
