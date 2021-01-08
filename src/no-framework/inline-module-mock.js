
function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  mockFn.mockImplementation = newImpl => (impl = newImpl)
  return mockFn
}

const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1)
  }
}
const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Naoya Shimizu', 'Sayaka Shimizu')

assert.strictEqual(winner, 'Naoya Shimizu')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  [ 'Naoya Shimizu', 'Sayaka Shimizu' ],
      [ 'Naoya Shimizu', 'Sayaka Shimizu' ]
])

delete require.cache[utilsPath]