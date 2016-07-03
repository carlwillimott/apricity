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

	"use strict";
	
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
	        this._refs = this._getRefs();
	
	        if (rule) {
	            this.addRule(rule);
	        }
	    }
	
	    /**
	     * Simple add method (this can also be called in the constructor).
	    **/
	
	
	    _createClass(Apricity, [{
	        key: "addRule",
	        value: function addRule(rule) {
	            if (!rule) {
	                throw Error("No rule entered.");
	            }
	
	            var result = false;
	            if (typeof rule === 'string') {
	                var processed = this._stringPreprocess(rule);
	                var newId = this._id++;
	                processed.id = newId;
	                processed.raw = rule;
	                result = newId;
	                this._rules.push(processed);
	            }
	
	            this._defineMasterRule();
	
	            return result;
	        }
	
	        /**
	         * Fetch a rule from the given id.
	        **/
	
	    }, {
	        key: "getRule",
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
	        key: "getMaster",
	        value: function getMaster() {
	            return this._master;
	        }
	    }, {
	        key: "removeRule",
	        value: function removeRule(id) {}
	
	        /**
	         * Fetch a series of dates for the next executions.
	        **/
	
	    }, {
	        key: "getNext",
	        value: function getNext(count) {
	            count = count || 1;
	        }
	
	        /**
	         * Scan each rule to build a master based on actual coverage.
	        **/
	
	    }, {
	        key: "_defineMasterRule",
	        value: function _defineMasterRule() {
	            var _this = this;
	
	            var master = {
	                min: null, hour: null, day: null, month: null, week: null
	            };
	
	            this._rules.forEach(function (rule) {
	                master.min = _this._calculateMin(master.min, rule.data.min);
	                master.hour = _this._calculateHour(master.hour, rule.data.hour);
	                master.day = _this._calculateDay(master.day, rule.data.day);
	                master.month = _this._calculateMonth(master.month, rule.data.month);
	                master.week = _this._calculateWeek(master.week, rule.data.week);
	            });
	
	            this._master = master;
	        }
	
	        /**
	         * We need to manipulate the string into an object before continuing.
	        **/
	
	    }, {
	        key: "_stringPreprocess",
	        value: function _stringPreprocess(rule) {
	
	            var res = rule.split(" ");
	
	            if (res.length !== 5) {
	                throw Error("Invalid input.");
	            }
	
	            return {
	                data: {
	                    min: res[0],
	                    hour: res[1],
	                    day: res[2],
	                    month: res[3],
	                    week: res[4]
	                }
	            };
	        }
	    }, {
	        key: "_calculateMin",
	        value: function _calculateMin(current, latest) {}
	    }, {
	        key: "_calculateHour",
	        value: function _calculateHour(current, latest) {}
	    }, {
	        key: "_calculateDay",
	        value: function _calculateDay(current, latest) {}
	    }, {
	        key: "_calculateMonth",
	        value: function _calculateMonth(current, latest) {}
	    }, {
	        key: "_calculateWeek",
	        value: function _calculateWeek(current, latest) {
	            // 0 - Sun, 1 - Mon, 2 - Tue, 3 - Wed, 4 - Thu, 5 - Fri, 6 - Sat
	            var week = current || {
	                "0": false, "1": false, "2": false, "3": false,
	                "4": false, "5": false, "6": false
	            };
	
	            week = this._singleMatcher(latest, week);
	
	            if (latest.indexOf("*") > -1) {
	                week = this._starMatcher(latest, week);
	            }
	
	            if (latest.indexOf(",") > -1) {
	                week = this._seriesMatcher(latest, week);
	            }
	
	            if (latest.indexOf("-") > -1) {
	                week = this._rangeMatcher(latest, week);
	            }
	
	            return week;
	        }
	    }, {
	        key: "_singleMatcher",
	        value: function _singleMatcher(latest, target) {
	            if (target.hasOwnProperty(latest)) {
	                target[latest] = true;
	            }
	            return target;
	        }
	    }, {
	        key: "_starMatcher",
	        value: function _starMatcher(latest, target) {
	            for (var i = 0; i < Object.keys(target).length; i++) {
	                target[i] = true;
	            }
	            return target;
	        }
	    }, {
	        key: "_seriesMatcher",
	        value: function _seriesMatcher(latest, target) {
	            var pieces = latest.split(",");
	            pieces.forEach(function (piece) {
	                if (target.hasOwnProperty(piece)) {
	                    target[piece] = true;
	                }
	            });
	            return target;
	        }
	    }, {
	        key: "_rangeMatcher",
	        value: function _rangeMatcher(latest, target) {
	            var pieces = latest.split("-");
	            var start = pieces[0];
	            var end = pieces[1];
	            for (var i = start; i <= end; i++) {
	                if (target.hasOwnProperty(i)) {
	                    target[i] = true;
	                }
	            }
	            return target;
	        }
	
	        /**
	         * Internal reference function for text based representations of values.
	        **/
	
	    }, {
	        key: "_getRefs",
	        value: function _getRefs() {
	            return {
	                'month': {
	                    'JAN': 1, 'FEB': 2, 'MAR': 3, 'APR': 4,
	                    'MAY': 5, 'JUN': 6, 'JUL': 7, 'AUG': 8,
	                    'SEP': 9, 'OCT': 10, 'NOV': 11, 'DEC': 12
	                },
	                'week': {
	                    'SUN': 0, 'MON': 1, 'TUE': 2, 'WED': 3,
	                    'THU': 4, 'FRI': 5, 'SAT': 6
	                }
	            };
	        }
	    }]);
	
	    return Apricity;
	}();
	
	exports.default = Apricity;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=apricity.js.map