Vue.component('review-list', {
  template:
    /*html*/
    `
    <div class="review-container">
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul v-else>
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
