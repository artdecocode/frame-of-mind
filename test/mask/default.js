import { makeTestSuite } from 'zoroaster'
import frameOfMind from '../../src'

const ts = makeTestSuite('test/result/index.md', {
  async getResults(input) {
    const res = frameOfMind(input)
    return res
  },
})

export const padding = makeTestSuite('test/result/padding.md', {
  async getResults(input) {
    const res = frameOfMind(input, {
      padding: 2,
    })
    return res
  },
})

export default ts