import {relative} from 'path'
import glob from 'glob'
import _ from 'underscore'

// set global underscore library to simulate Meteor
global._ = _

// get all files that look like *.test.js or *.test.jsx
const paths = glob.sync(__dirname + '/../**/*.test.@(js|jsx)', {
  ignore: '/../node_modules/**'
})

// describe path and run a test for it
paths.forEach((path) => {
  const relativePath = relative(__dirname + '/..', path)
  const fn = require(path).default
  describe(relativePath, fn)
})
