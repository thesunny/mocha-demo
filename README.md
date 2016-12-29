# Mocha Demo

This Mocha Demo lets you place your unit tests anywhere within your project as long as they are named like `**.test.js` or `**.test.jsx`.

For example, you may wish to:

* Place unit tests in the same directory as the file you are testing and use the same filename (but with the `.test.js` or `.test.jsx` extension)
* Place unit tests within a `/test` subdirectory.

Some benefits:

* Avoids have to have '../../../../schema/user/validator' type imports
* It's easy to see which files have unit tests because the unit tests can be placed in the same directory or a `/test` subdirectory of the file you are testing.
* Tests are easy to locate because they are nearby
* No need to `import` every test file because Mocha Demo finds them for you automatically
* No need to 'describe' mocha tests as the they will self describe using the path to the test. Incidentally, this usually tells you the directory in which the file you are testing resides because the `.test.js` file is nearby.
* But you can still additional `describe` blocks if you want.
* An additional benefit is that it is easy to find where your failing test is by looking at the description in the output because it is the path


## To run a test

```
npm run test
```

## Run Select Tests

use `it.only` to run only a specific test.

```js
it.only('makes sure 1+1 = 2', function () {
  assert.equal(2, 1+1)
})
```

use `describe.only` to run only a specific suite of tests.

```js
describe.only('addition', function () {
  it('makes sure 1+1 = 2', function () {
    assert.equal(2, 1+1)
  })
  it('makes sure 2+2 = 4', function () {
    assert.equal(4, 2+2)
  })
})
```

## Assert

Use any assertion library. Examples are using assert but feel free to use any other assertion library like `better-assert`

```js
import assert from 'assert'
```

