"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileToFunctions = exports.compile = void 0;

var _options = require("./options");

var _index = require("compiler/index");

/* @flow */
var _createCompiler = (0, _index.createCompiler)(_options.baseOptions),
    compile = _createCompiler.compile,
    compileToFunctions = _createCompiler.compileToFunctions;

exports.compileToFunctions = compileToFunctions;
exports.compile = compile;