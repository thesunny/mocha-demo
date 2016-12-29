# Mocha Demo

I like to have my unit tests near the actual files that they test.

This Mocha Demo lets you put your unit tests anywhere so long as they are named like `**.test.js` or `**.test.jsx`

* Avoids using '../../../../schema/user/validator' type imports
* Easy to see which files have tests
* Tests are easy to find
* No need to 'describe' mocha tests as the directory/testfile will self describe
* An additional benefit is that it is easy to find where your failing test is by looking at the description in the output because it is the path
* Gives you flexibility where the file is placed because tests are identified with '**.test.js' or '**.test.jsx' (i.e. they can be placed within a /test/ subdirectory of desired)


## To run a test

```
npm run test
```


## Use Your Preferred Assertion Library

We're using assert but feel free to use any other assertion library like `better-assert`

```js
import assert from 'assert'
```

