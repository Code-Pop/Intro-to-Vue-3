app.component('review-list', {
  template:
    /*html*/
    `
    <div class="review-container">
      <h3 v-if="!reviews.length">There are no reviews yet.</h3>
      <div v-else>
      <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.text }}"
          </li>
        </ul>
      </div>
    </div>
  `,
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
})
