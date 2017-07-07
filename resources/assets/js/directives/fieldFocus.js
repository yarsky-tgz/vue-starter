export default {
    inserted(el, { value }, { context }) {
        let inputElement = el.querySelector('input');
        const focused = (focused) => { context.$set(context.fields[value], 'focused', focused) };
        inputElement.addEventListener('focus', () => { focused(true) } );
        inputElement.addEventListener('blur', () => { focused(false) } );
    }
}