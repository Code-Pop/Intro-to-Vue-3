const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        // solution
        removeById(id) {
            const lastIndex = this.cart.lastIndexOf(id);
            if (lastIndex > -1) {
                this.cart = this.cart.filter((value, index) => { 
                    return (lastIndex!==index);
                });
            }
        }
        // solution
    }
})
