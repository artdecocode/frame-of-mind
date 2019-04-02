import makeTestSuite from '@zoroaster/mask'
import frameOfMind from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults(input) {
    const res = frameOfMind(input)
    return res
  },
})

export const padding = makeTestSuite('test/result/padding', {
  async getResults(input) {
    const res = frameOfMind(input, {
      padding: 2,
    })
    return res
  },
})