"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _employers = _interopRequireDefault(require("./employers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

var cash = sponsors.cash,
    eu = sponsors.eu,
    _sponsors$eu = _slicedToArray(sponsors.eu, 1),
    srl = _sponsors$eu[0],
    rus = sponsors.rus;

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return own.reduce(function (a, b) {
    return a + b;
  }, 0);
}

var money = calcCash(cash);

function makeBusiness(owner, director, cash, emp) {
  var _console;

  director = director || 'Victor';
  var sumSponsors = eu.concat(rus, 'unexpected sponsor');
  console.log("We have a business. Owner: ".concat(owner, ", director: ").concat(director, ". Our budget: ").concat(cash, ". And our employers: ").concat(emp));
  console.log("And we have a sponsors: ");

  (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

  console.log("Note. Be careful with ".concat(srl, ". It's a huge risk."));
}

makeBusiness('Sam', null, money, _employers.default);