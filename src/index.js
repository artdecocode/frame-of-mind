import paddys from 'paddys'
/**
 * Add a frame around strings.
 * @param {string} string The string to frame.
 * @param {Config} [options] Options for the program.
 * @param {number} [options.padding=1] The left and right padding. Default `1`.
 */
export default function frameOfMind(string, options = {}) {
  const { padding = 1 } = options
  const l = string.split('\n')
  const w = l.reduce((acc, { length }) => length > acc ? length : acc, 0)
  const ww = w + padding * 2
  const bt = `┌${'─'.repeat(ww)}┐`
  const bb = `└${'─'.repeat(ww)}┘`
  const pp = ' '.repeat(padding)
  const p = paddys(string)
    .split('\n')
    .map(line => `│${pp}${line}${pp}│`)
    .join('\n')
  return `${bt}\n${p}\n${bb}`
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {number} [padding=1] The left and right padding. Default `1`.
 */
