/// <reference path="../bundle/main.d.ts" />
/// <reference path="../typings/main.d.ts" />

import falcor = require('falcor')
import FalcorRouter = require('falcor-router')
import falcorExpress = require('falcor-express')
import assert = require('assert')

assert.equal(typeof falcorExpress.dataSourceRoute, 'function')

falcorExpress.dataSourceRoute(function () {
  return new FalcorRouter([])
})