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

  describe('Moderator', () => {
    it('contains forbidden word', () => {
      expect(app.containsForbiddenWords('Vous êtes tous des truffes')).toEqual(
        true
      );
    });
  
    it('does NOT contains forbidden word', () => {
      expect(app.containsForbiddenWords('Hello World')).toEqual(false);
    });
  
    it.todo('removes forbidden word');
  });