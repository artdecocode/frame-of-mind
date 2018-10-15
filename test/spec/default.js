import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import frameOfMind from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof frameOfMind, 'function')
  },
  async 'calls package without error'() {
    await frameOfMind()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await frameOfMind({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T