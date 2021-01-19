window.addEventListener('load', (event) => {
    /*
    const msg = 'Hello JavaScript !!'
    console.log(msg);
    alert(msg);
    */
    new Vue({
        el:'#app',
        data(){
            return{
                text:"Hello Vue.js !!"
            };
        }
    })
});
