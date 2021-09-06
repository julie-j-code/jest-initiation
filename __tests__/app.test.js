const app = require('../app.js');

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

  it('removes forbidden word', () => {
    expect(app.removeForbiddenWords('Vous êtes tous des truffes')).toEqual(
      'Vous êtes tous des xxx'
    );
  });

  it('removes all forbidden words', () => {
    expect(
      app.removeForbiddenWords(
        'Vous êtes des truffes que je roule dans la confiture'
      )
    ).toEqual('Vous êtes des xxx que je roule dans la xxx');
  });

  it('works with any upper and lower case', () => {
    expect(app.removeForbiddenWords('Bande de TrUfFes TRUFFES')).toEqual(
      'Bande de xxx xxx'
    );
  });
});