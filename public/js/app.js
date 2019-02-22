/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\tools\\\\cygwin\\\\home\\\\Dash10-CPU009\\\\workspace\\\\web\\\\Vue-Forms\\\\node_modules\\\\axios\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\tools\\\\cygwin\\\\home\\\\Dash10-CPU009\\\\workspace\\\\web\\\\Vue-Forms\\\\node_modules\\\\vue\\\\dist\\\\vue.common.js'\");\n\n//# sourceURL=webpack:///./node_modules/vue/dist/vue.common.js?");

/***/ }),

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.common.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Form */ \"./resources/assets/js/core/Form.js\");\n/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Example */ \"./resources/assets/js/components/Example.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;\r\nwindow.Form = _core_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\nnew vue__WEBPACK_IMPORTED_MODULE_0___default.a({\r\n    el: '#app',\r\n\r\n    components: {\r\n        Example: _components_Example__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n    },\r\n\r\n    data: {\r\n        form: new _core_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n            name: '',\r\n            description: ''\r\n        })\r\n    },\r\n\r\n    methods: {\r\n        onSubmit() {\r\n            this.form.post('/projects')\r\n                .then(response => alert('Wahoo!'));\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./resources/assets/js/app.js?");

/***/ }),

/***/ "./resources/assets/js/components/Example.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/components/Example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    template: `<h1>Hello World!</h1>`\r\n});\n\n//# sourceURL=webpack:///./resources/assets/js/components/Example.js?");

/***/ }),

/***/ "./resources/assets/js/core/Errors.js":
/*!********************************************!*\
  !*** ./resources/assets/js/core/Errors.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Errors {\r\n    /**\r\n     * Create a new Errors instance.\r\n     */\r\n    constructor() {\r\n        this.errors = {};\r\n    }\r\n\r\n\r\n    /**\r\n     * Determine if an errors exists for the given field.\r\n     *\r\n     * @param {string} field\r\n     */\r\n    has(field) {\r\n        return this.errors.hasOwnProperty(field);\r\n    }\r\n\r\n\r\n    /**\r\n     * Determine if we have any errors.\r\n     */\r\n    any() {\r\n        return Object.keys(this.errors).length > 0;\r\n    }\r\n\r\n\r\n    /**\r\n     * Retrieve the error message for a field.\r\n     *\r\n     * @param {string} field\r\n     */\r\n    get(field) {\r\n        if (this.errors[field]) {\r\n            return this.errors[field][0];\r\n        }\r\n    }\r\n\r\n\r\n    /**\r\n     * Record the new errors.\r\n     *\r\n     * @param {object} errors\r\n     */\r\n    record(errors) {\r\n        this.errors = errors;\r\n    }\r\n\r\n\r\n    /**\r\n     * Clear one or all error fields.\r\n     *\r\n     * @param {string|null} field\r\n     */\r\n    clear(field) {\r\n        if (field) {\r\n            delete this.errors[field];\r\n\r\n            return;\r\n        }\r\n\r\n        this.errors = {};\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Errors);\n\n//# sourceURL=webpack:///./resources/assets/js/core/Errors.js?");

/***/ }),

/***/ "./resources/assets/js/core/Form.js":
/*!******************************************!*\
  !*** ./resources/assets/js/core/Form.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ \"./resources/assets/js/core/Errors.js\");\n\r\n\r\nclass Form {\r\n    /**\r\n     * Create a new Form instance.\r\n     *\r\n     * @param {object} data\r\n     */\r\n    constructor(data) {\r\n        this.originalData = data;\r\n\r\n        for (let field in data) {\r\n            this[field] = data[field];\r\n        }\r\n\r\n        this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n\r\n\r\n    /**\r\n     * Fetch all relevant data for the form.\r\n     */\r\n    data() {\r\n        let data = {};\r\n\r\n        for (let property in this.originalData) {\r\n            data[property] = this[property];\r\n        }\r\n\r\n        return data;\r\n    }\r\n\r\n\r\n    /**\r\n     * Reset the form fields.\r\n     */\r\n    reset() {\r\n        for (let field in this.originalData) {\r\n            this[field] = '';\r\n        }\r\n\r\n        this.errors.clear();\r\n    }\r\n\r\n\r\n    /**\r\n     * Send a POST request to the given URL.\r\n     * .\r\n     * @param {string} url\r\n     */\r\n    post(url) {\r\n        return this.submit('post', url);\r\n    }\r\n\r\n\r\n    /**\r\n     * Send a PUT request to the given URL.\r\n     * .\r\n     * @param {string} url\r\n     */\r\n    put(url) {\r\n        return this.submit('put', url);\r\n    }\r\n\r\n\r\n    /**\r\n     * Send a PATCH request to the given URL.\r\n     * .\r\n     * @param {string} url\r\n     */\r\n    patch(url) {\r\n        return this.submit('patch', url);\r\n    }\r\n\r\n\r\n    /**\r\n     * Send a DELETE request to the given URL.\r\n     * .\r\n     * @param {string} url\r\n     */\r\n    delete(url) {\r\n        return this.submit('delete', url);\r\n    }\r\n\r\n\r\n    /**\r\n     * Submit the form.\r\n     *\r\n     * @param {string} requestType\r\n     * @param {string} url\r\n     */\r\n    submit(requestType, url) {\r\n        return new Promise((resolve, reject) => {\r\n            axios[requestType](url, this.data())\r\n                .then(response => {\r\n                    this.onSuccess(response.data);\r\n\r\n                    resolve(response.data);\r\n                })\r\n                .catch(error => {\r\n                    this.onFail(error.response.data);\r\n\r\n                    reject(error.response.data);\r\n                });\r\n        });\r\n    }\r\n\r\n\r\n    /**\r\n     * Handle a successful form submission.\r\n     *\r\n     * @param {object} data\r\n     */\r\n    onSuccess(data) {\r\n        alert(data.message); // temporary\r\n\r\n        this.reset();\r\n    }\r\n\r\n\r\n    /**\r\n     * Handle a failed form submission.\r\n     *\r\n     * @param {object} errors\r\n     */\r\n    onFail(errors) {\r\n        this.errors.record(errors);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./resources/assets/js/core/Form.js?");

/***/ })

/******/ });