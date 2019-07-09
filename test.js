const assert = require('assert');

const { keysAtDepth } = require('./dist');

describe('keys-at-depth', function() {
  it('should work for all depths', function() {
    assert.deepStrictEqual(
      [
        'name',
        'age',
        'subjects',
        'relations'
      ],
      keysAtDepth({
        name: 'myname',
        age: 10,
        subjects: [
          'maths',
          'physics'
        ],
        relations: {
          mom: {
            name: 'mymom'
          }
        }
      }, 0)
    );

    assert.deepStrictEqual(
      [
        'mom'
      ],
      keysAtDepth({
        name: 'myname',
        age: 10,
        subjects: [
          'maths',
          'physics'
        ],
        relations: {
          mom: {
            name: 'mymom'
          }
        }
      }, 1)
    );

    assert.deepStrictEqual(
      [
        'relationname'
      ],
      keysAtDepth({
        name: 'myname',
        age: 10,
        subjects: [
          'maths',
          'physics'
        ],
        relations: {
          mom: {
            relationname: 'mymom'
          }
        }
      }, 2)
    );

    assert.deepStrictEqual(
      [],
      keysAtDepth({
        name: 'myname',
        age: 10,
        subjects: [
          'maths',
          'physics'
        ],
        relations: {
          mom: {
            relationname: 'mymom'
          }
        }
      }, 3)
    );
  })
});
