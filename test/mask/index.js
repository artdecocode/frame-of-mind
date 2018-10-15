import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import frameOfMind from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await frameOfMind({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts