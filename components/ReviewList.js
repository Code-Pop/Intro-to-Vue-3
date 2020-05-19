app.component('review-list', {
  template:
    /*html*/
    `
    <div  v-if="reviews.length" class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br/>
          "{{ review.text }}"
        </li>
      </ul>
    </div>
  `,
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
})
