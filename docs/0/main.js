window.addEventListener('load', (event) => {
    Vue.config.devtools = true;
    new Vue({
        el:'#app',
        data(){
            return{
                text:"Hello Vue.js !!"
            };
        }
    })
});
