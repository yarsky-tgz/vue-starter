const focused = function(name) {
    return this.fields && this.fields[name] && this.fields[name].focused;
};

export default {
    install(Vue) {
        Vue.prototype.focused = focused;
        Vue.directive('field-focus', {
            inserted(el, { value }, { context }) {
                let inputElement = el.querySelector('input');
                const focused = (focused) => { context.$set(context.fields[value], 'focused', focused) };
                inputElement.addEventListener('focus', () => { focused(true) } );
                inputElement.addEventListener('blur', () => { focused(false) } );
            }
        });
    }
}