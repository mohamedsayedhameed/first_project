import 'babel-polyfill'
import { handleSubmit } from "../js/handlesubmit"


describe("Testing the submit functionality", () => {
    test("Making sure handleSubmit is defined", () => {
      expect(handleSubmit).toBeDefined();
    });
  });