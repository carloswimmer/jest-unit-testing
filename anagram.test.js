const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function')
})

test('"Dormitory" is anagram of "dirty room!!"', () => {
  expect(isAnagram('Dormitory', 'dirty room!!')).toBeTruthy()
})

test('"Hello" is NOT anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy()
})