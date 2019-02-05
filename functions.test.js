const functions = require('./functions')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Checking names...')

describe('Checking names', () => {
  beforeEach(() => nameCheck())

  test('User is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  })

  test('User is Karen', () => {
    const user = 'Karen'
    expect(user).toBe('Karen')
  })
})

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('Null should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test('0 should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy()
})

test('Undefined should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})

test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  })
})

test('Should be under 1600', () => {
  const load1 = 800
  const load2 = 700
  expect(load1 + load2).toBeLessThan(1600)
})

test('There is no H in team', () => {
  expect('team').not.toMatch(/H/i)
})

test('Admin should be in usernames', () => {
  const usernames = ['john','karen', 'admin']
  expect(usernames).toContain('admin')
})

test('User fetched name should be Leanne Graham (with Promises)', () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

test('User fetched name should be Leanne Graham (with Async / Await)', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})