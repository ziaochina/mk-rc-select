webpackJsonp([12],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
throw new Error("Cannot find module \"rc-select\"");
throw new Error("Cannot find module \"rc-select/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* eslint no-console: 0 */






function onChange(value) {
  console.log('selected ' + value);
}

var c1 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Select optionFilterProp'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { width: 300 } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_rc_select___default.a,
      {
        defaultValue: '\u5F20\u4E09',
        style: { width: 500 },
        placeholder: 'placeholder',
        optionFilterProp: 'desc',
        onChange: onChange
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
        { value: '\u5F20\u4E09', desc: '\u5F20\u4E09 zhang san' },
        '\u5F20\u4E09'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
        { value: '\u674E\u56DB', desc: '\u674E\u56DB li si' },
        '\u674E\u56DB'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
        { value: '\u738B\u4E94', desc: '\u738B\u4E94 wang wu' },
        '\u738B\u4E94'
      )
    )
  )
);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(c1, document.getElementById('__react-content'));

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(187);


/***/ })

},[319]);
//# sourceMappingURL=optionFilterProp.js.map