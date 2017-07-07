webpackJsonp([1],{

/***/ 11:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(45);


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_fieldFocus__ = __webpack_require__(63);
__webpack_require__(14);
var Vue = __webpack_require__(8);





var config = {
    errorBagName: 'vee', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 0,
    locale: 'en',
    dictionary: null,
    strict: true,
    enableAutoClasses: false,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    },
    events: 'change|blur',
    inject: true
};

Vue.use(__WEBPACK_IMPORTED_MODULE_3__plugins_fieldFocus__["a" /* default */]);
Vue.use(__WEBPACK_IMPORTED_MODULE_1_vee_validate___default.a, config);
Vue.use(__WEBPACK_IMPORTED_MODULE_0_vuetify___default.a);
Vue.use(__WEBPACK_IMPORTED_MODULE_2__directives__["a" /* default */]);
//directives(Vue);
Vue.component('login-page', __webpack_require__(37));

var app = new Vue({
    el: '#app'
});

window.Vue = Vue;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

//window._ = require('lodash');
window.axios = __webpack_require__(2);
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldFocus__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        Vue.directive('field-focus', __WEBPACK_IMPORTED_MODULE_0__fieldFocus__["a" /* default */]);
    }
});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    inserted: function inserted(el, _ref, _ref2) {
        var value = _ref.value;
        var context = _ref2.context;

        var inputElement = el.querySelector('input');
        var focused = function focused(_focused) {
            context.$set(context.fields[value], 'focused', _focused);
        };
        inputElement.addEventListener('focus', function () {
            focused(true);
        });
        inputElement.addEventListener('blur', function () {
            focused(false);
        });
    }
});

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(38)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(44),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-41144632",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/yarsky/work/github/vue-starter/resources/assets/js/components/pages/login/LoginPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LoginPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41144632", Component.options)
  } else {
    hotAPI.reload("data-v-41144632", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Login_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Login_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        loginForm: __WEBPACK_IMPORTED_MODULE_0__Login_vue___default.a
    }
});

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(41)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(43),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-316785b8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/yarsky/work/github/vue-starter/resources/assets/js/components/pages/login/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-316785b8", Component.options)
  } else {
    hotAPI.reload("data-v-316785b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            email: '',
            password: ''
        };
    }
});

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('form', {
    attrs: {
      "name": "login-page__form"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.$validator.validateAll()
      }
    }
  }, [_c('v-card', {
    staticClass: "login"
  }, [_c('v-card-title', {
    staticClass: "accent darken-4 white--text"
  }, [_vm._v("\n                Login\n            ")]), _vm._v(" "), _c('v-card-text', [_c('v-text-field', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required|email'),
      expression: "'required|email'"
    }, {
      name: "field-focus",
      rawName: "v-field-focus",
      value: ('email'),
      expression: "'email'"
    }],
    attrs: {
      "name": "email",
      "label": "email",
      "type": "email",
      "error": _vm.vee.has('email') && !_vm.focused('email'),
      "errors": !_vm.focused('email') ? _vm.vee.collect('email') : []
    },
    model: {
      value: (_vm.email),
      callback: function($$v) {
        _vm.email = $$v
      },
      expression: "email"
    }
  }), _vm._v(" "), _c('v-text-field', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }, {
      name: "field-focus",
      rawName: "v-field-focus",
      value: ('password'),
      expression: "'password'"
    }],
    attrs: {
      "name": "password",
      "label": "password",
      "type": "password",
      "error": _vm.vee.has('password') && !_vm.focused('password'),
      "errors": !_vm.focused('password') ? _vm.vee.collect('password') : []
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('v-card-row', {
    attrs: {
      "actions": ""
    }
  }, [_c('div', {
    staticClass: "login-socials"
  }, [_c('v-btn', {
    staticClass: "gray--text",
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', {
    attrs: {
      "fa": ""
    }
  }, [_vm._v("github")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "indigo--text",
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', {
    attrs: {
      "fa": ""
    }
  }, [_vm._v("google")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "deep-purple--text",
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', {
    attrs: {
      "fa": ""
    }
  }, [_vm._v("facebook")])], 1)], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-btn', {
    attrs: {
      "info": "",
      "type": "submit",
      "disabled": _vm.vee.any()
    }
  }, [_c('v-icon', {
    staticClass: "white--text",
    attrs: {
      "large": ""
    }
  }, [_vm._v("vpn_key")])], 1)], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-316785b8", module.exports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', {
    attrs: {
      "light": ""
    }
  }, [_c('v-layout', {
    staticStyle: {
      "height": "100vh"
    },
    attrs: {
      "row": "",
      "wrap": "",
      "align-center": "",
      "justify-center": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs12": "",
      "sm5": "",
      "md4": "",
      "lg3": "",
      "xl3": ""
    }
  }, [_c('login-form')], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41144632", module.exports)
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var focused = function focused(name) {
    return this.fields && this.fields[name] && this.fields[name].focused;
};

/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        Vue.prototype.focused = focused;
        Vue.directive('field-focus', {
            inserted: function inserted(el, _ref, _ref2) {
                var value = _ref.value;
                var context = _ref2.context;

                var inputElement = el.querySelector('input');
                var focused = function focused(_focused) {
                    context.$set(context.fields[value], 'focused', _focused);
                };
                inputElement.addEventListener('focus', function () {
                    focused(true);
                });
                inputElement.addEventListener('blur', function () {
                    focused(false);
                });
            }
        });
    }
});

/***/ })

},[12]);