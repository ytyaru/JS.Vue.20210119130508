var app;
window.addEventListener('load', (event) => {
    app = new Vue({
        el: '#app',
        data: {
            todos: [
                {text: '学習する。JavaScriptを。'},
                {text: '学習する。Vue.jsを。'},
                {text: 'コードを書く。Vue.jsの。'},
            ]
        }
    })
});
