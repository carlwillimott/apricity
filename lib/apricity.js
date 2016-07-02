(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Apricity", [], factory);
	else if(typeof exports === 'object')
		exports["Apricity"] = factory();
	else
		root["Apricity"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Apricity = function () {
	    function Apricity(rule) {
	        _classCallCheck(this, Apricity);
	
	        this._id = 0;
	        this._rules = [];
	        this._master = null;
	
	        if (rule) {
	            this.addRule(rule);
	        }
	    }
	
	    _createClass(Apricity, [{
	        key: 'addRule',
	        value: function addRule(rule) {
	            if (!rule) {
	                throw Error("No rule entered.");
	            }
	
	            var result = false;
	            if (typeof rule === 'string') {
	                var processed = this._stringPreprocess(rule);
	                var newId = this._id++;
	                processed.id = newId;
	                result = newId;
	                this._rules.push(processed);
	            }
	
	            this._defineMasterRule();
	
	            return result;
	        }
	    }, {
	        key: 'getRule',
	        value: function getRule(id) {
	            var result = false;
	            this._rules.forEach(function (rule) {
	                if (rule.id === id) {
	                    result = rule;
	                }
	            });
	            return result;
	        }
	    }, {
	        key: 'getMaster',
	        value: function getMaster() {
	            return this._master;
	        }
	    }, {
	        key: 'removeRule',
	        value: function removeRule(id) {}
	
	        /**
	        * Fetch a series of dates for the next executions.
	        **/
	
	    }, {
	        key: 'getNext',
	        value: function getNext(count) {
	            count = count || 1;
	        }
	
	        /**
	        * Scan each rule to build a master based on actual coverage.
	        **/
	
	    }, {
	        key: '_defineMasterRule',
	        value: function _defineMasterRule() {
	            var _this = this;
	
	            var master = {
	                min: null, hour: null, day: null, month: null, week: null
	            };
	
	            // For each part we can skip already if we have a star.
	            this._rules.forEach(function (rule) {
	                if (master.min !== '*') {
	                    master.min = _this._calculateMin(master.min, rule.min);
	                }
	                if (master.hour !== '*') {
	                    master.min = _this._calculateHour(master.hour, rule.hour);
	                }
	                if (master.day !== '*') {
	                    master.min = _this._calculateDay(master.day, rule.day);
	                }
	                if (master.month !== '*') {
	                    master.min = _this._calculateMonth(master.month, rule.month);
	                }
	                if (master.week !== '*') {
	                    master.min = _this._calculateWeek(master.week, rule.week);
	                }
	            });
	
	            this._master = master;
	        }
	
	        /**
	        * We need to manipulate the string into an object before continuing.
	        **/
	
	    }, {
	        key: '_stringPreprocess',
	        value: function _stringPreprocess(rule) {
	
	            var res = rule.split(" ");
	
	            if (res.length !== 5) {
	                throw Error("Invalid input.");
	            }
	
	            return {
	                min: res[0],
	                hour: res[1],
	                day: res[2],
	                month: res[3],
	                week: res[4]
	            };
	        }
	    }, {
	        key: '_calculateMin',
	        value: function _calculateMin() {}
	    }, {
	        key: '_calculateHour',
	        value: function _calculateHour() {}
	    }, {
	        key: '_calculateDay',
	        value: function _calculateDay() {}
	    }, {
	        key: '_calculateMonth',
	        value: function _calculateMonth() {}
	    }, {
	        key: '_calculateWeek',
	        value: function _calculateWeek() {}
	    }]);
	
	    return Apricity;
	}();
	
	exports.default = Apricity;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=apricity.js.map