const app=require("../app.js");

describe('Palindrom', () => {
    it('should retrieve a string', () => {
      expect(app.sentence.length).toBeGreaterThan(0);
    });
  
    it('should be a palindrom', () => {
      expect(app.isPalindrom('kayak')).toEqual(true);
    });
  
    it('should NOT be a palindrom', () => {
      expect(app.isPalindrom('coucou')).toEqual(false);
    });
  });