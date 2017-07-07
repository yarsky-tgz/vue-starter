import fieldFocus from './fieldFocus';

export default {
    install(Vue) {
        Vue.directive('field-focus', fieldFocus)
    }
}
