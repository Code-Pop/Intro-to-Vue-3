app.component("review-form", {
  template:
    /*html*/
    `
  <form class="review-form" @submit.prevent="onSubmit">
  <h3>Leave a review</h3>
  <label for="name">Name</label>
  <input id="name" v-model="name">
  <label for="review">Review:</label>
  <textarea id="review" v-model="review"></textarea>
  <label for="rating">Rating</label>
  <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
  </select>
  <label for="recommend" id="recommendation">Would you recommend it? </label>
  <input type="radio" id="yes" v-model="recommendation" name="recommendation" value="yes"/>
  <input type="radio" id="no" v-model="recommendation" name="recommendation" value="no"/>
  <input class="button" type="submit" value="submit">
  </form>

  `,

  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommendation: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || (this.review === "") | (this.rating === null)) {
        alert("review is incomplete");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommendation: this.recommendation,
      };

      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommendation = null;
    },
  },
});
