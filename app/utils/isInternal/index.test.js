import isInternal from './';

describe('isInternal', () => {
  it('should return false on external link', () => {
    expect(isInternal('http://www.example.com')).toBe(false);
  });

  it('should return true on internal link', () => {
    expect(isInternal('/example')).toBe(true);
  });
});
