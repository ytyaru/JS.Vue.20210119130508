var app;
window.addEventListener('load', (event) => {
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    });
    app = new Vue({
        el: '#app',
        data: {
            todos: [
                {id:0, text:"やること１"},
                {id:1, text:"やること２"},
                {id:2, text:"やること３"},
            ]
        },
    });
});
