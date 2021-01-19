var app;
window.addEventListener('load', (event) => {
    Vue.component('todo-item', {
        template: '<li>This is a todo</li>'
    });
    app = new Vue({
        el: '#app',
        data: {
        },
    });
});
