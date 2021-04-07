const app = Vue.createApp({
    data(){
        return{
            product:'Socks',
            image:'./assets/images/socks_blue.jpg',
            url:'',
            inStock: true,
            inventory:100,
            onSale:true
        }
    }
})
