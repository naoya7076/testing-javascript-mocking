const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p2)

  const winner = thumbWar('Naoya Shimizu', 'Sayaka Shimizu')

  expect(winner).toBe('Sayaka Shimizu')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('Naoya Shimizu', 'Sayaka Shimizu')
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Naoya Shimizu', 'Sayaka Shimizu')
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Naoya Shimizu', 'Sayaka Shimizu')
  expect(utils.getWinner.mock.calls).toEqual([
    [ 'Naoya Shimizu', 'Sayaka Shimizu' ],
      [ 'Naoya Shimizu', 'Sayaka Shimizu' ]
  ])

  utils.getWinner.mockRestore()
})
