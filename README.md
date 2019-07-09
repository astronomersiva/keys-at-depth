# keys-at-depth

Returns the keys of an object at a given depth `n`.

For example,

```
let details = {
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
};

keysAtDepth(details, 0) // ['name', 'age', 'subjects', 'relations']
```
