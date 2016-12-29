import assert from 'assert'
import equals from './equals'

export default function () {
  it('should equal if same string', function () {
    assert.equal(true, equals('a', 'a'))
  })

  it('should not equal if different string', function () {
    assert.equal(false, equals('a', 'b'))
  })

  it('should equal if same number', function () {
    assert.equal(true, equals(1, 1))
  })
}