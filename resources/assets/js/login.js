require('./bootstrap');
let Vue = require('vue');
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import directives from './directives';
import fieldFocus from './plugins/fieldFocus';

const config = {
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

Vue.use(fieldFocus);
Vue.use(VeeValidate, config);
Vue.use(Vuetify);
Vue.use(directives);
//directives(Vue);
Vue.component('login-page', require('./components/pages/login/LoginPage.vue'));

const app = new Vue({
    el: '#app'
});

window.Vue = Vue;