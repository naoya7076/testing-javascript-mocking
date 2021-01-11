require('../__no-framework-mocks__/utils')
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')

require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Naoya Shimizu', 'Sayaka Shimizu')
assert.strictEqual(winner, 'Naoya Shimizu')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Naoya Shimizu', 'Sayaka Shimizu'],
  ['Naoya Shimizu', 'Sayaka Shimizu']
])

delete require.cache[utilsPath]