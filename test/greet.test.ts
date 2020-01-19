import assert from 'assert'
import { greet } from '../src/greet'

describe('greet', () => {
  it('should return a greeting statement', () => {
    const actual: string = greet('Bobae')
    const expected = 'Hello, Bobae!'

    assert.equal(actual, expected)
  })
})
