const thumbWar = require('../thumb-war')
const utils = require('../utils')

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('returns winner',() => {
  const winner = thumbWar('Naoya Shimizu', 'Sayaka Shimizu')
  expect(winner).toBe('Naoya Shimizu')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Naoya Shimizu', 'Sayaka Shimizu'],
    ['Naoya Shimizu', 'Sayaka Shimizu']
  ])
  utils.getWinner.mockReset()
})
