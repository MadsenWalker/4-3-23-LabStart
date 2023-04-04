const {
    returnTwo,
    add,
    greeting
}= require('./functions')

test('return 2', () => {
  expect(returnTwo()).toBe(2);
})