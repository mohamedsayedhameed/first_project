import { validateUrl } from '../js/checkurl'

describe('Test check url functionality', ()=> {

    describe("Testing the validateUrl functionality", () => {
        test("Making sure validateUrl is defined", () => {
          expect(validateUrl).toBeDefined();
        });
      });

    test('validateUrl of https://jamesclear.com/reading-comprehension-strategies of true', ()=>{
        expect(validateUrl('https://jamesclear.com/reading-comprehension-strategies')).toBe(true);
    })

    
    
})