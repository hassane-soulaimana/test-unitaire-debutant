const {addition} = require('./math.js');

test('addition de 1 et 5 donne 6', () => {
    expect(addition(1,5)).toBe(6);
});
