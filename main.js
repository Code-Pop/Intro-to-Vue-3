
const app = Vue.createApp({


     data(){
        return{

            product:'Socks',
            inventory: 0,
            inStock:false,
            image:'./assets/images/socks_blue.jpg',
            cart:0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green',image:'./assets/images/socks_blue.jpg'},
                { id: 2235, color: 'blue',image:'./assets/images/socks_green.jpg'}
              ]
        }
     },

     methods:{
        addToCart(){
            this.cart +=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }


     }

     



})
