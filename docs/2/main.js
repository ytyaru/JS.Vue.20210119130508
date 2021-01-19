var app;
window.addEventListener('load', (event) => {
    app = new Vue({
        el: '#app',
        data: {
            seen: true
        }
        /*
        data() {
            return {
                text: "Hello Vue.js !!"
            };
        }
        */
    })
});
