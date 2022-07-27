// v-bind - jednostronne połączenie 	data --> view
// v-model - obustronne połączenie		data <-> view

app.component('review-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit"> <!-- modifier .prevent prevents default browser refresh -->
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating"> <!-- modifier .number == typecast jako number aka (int/float)rating -->
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
	
	<label for="recommendation">Would You recommend this product?</label>	<!-- coding challenge -->
	<select id="recommendation" v-model="recommendation">
		<option>Yes</option>
		<option>No</option>
	</select>

    <input class="button" type="submit" value="Submit">
  </form>`,
  
  data() {
    return {
      name: '',
      review: '',
      rating: null,
	  recommendation: null
    }
  },
  
  methods: {
	  onSubmit() {
		  if(this.name === '' || this.review === '' || this.rating === null || this.recommendation === null) {
			  alert('Review is incomplete. Please fill out every field.')
			  return
		  }
		  
		  
		  let productReview = {	//obiekt
			  name: this.name,
			  review: this.review,
			  rating: this.rating,
			  recommendation: this.recommendation=='Yes' ? true : false
		  }
		  this.$emit('product-submitted', productReview)	//emituje event i podaje obiekt productReview jako payload 
		  
		  this.name = ''	//reset
		  this.review = ''
		  this.rating = null
		  this.recommendation = null
	  }
  }
})