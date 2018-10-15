/* yarn example/ */
import frameOfMind from '../src'

(async () => {
  const res = await frameOfMind({
    text: 'example',
  })
  console.log(res)
})()