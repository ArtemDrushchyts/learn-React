"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (name) {
  return name.length > 0;
}).map(function (name) {
  return name.toLowerCase().trim();
});
var _default = employersNames;
exports.default = _default;