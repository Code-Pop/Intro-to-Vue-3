app.component('review-list', {
	props: {
		reviews: {
			type: Array,
			required: true
		}
	},
	
	template:
	/*html*/
	`
	<div class="review-container">
	<h3>Reviews:</h3>
		<ul>
			<li v-for="(review, index) in reviews" :key="index">
				{{ review.name }} gave this product {{ review.rating }} stars.<br>
				"{{review.review}}"<br>
				<text v-if="review.recommendation">{{ review.name }} <b>would recommend</b> this product.</text>
				<text v-else>{{ review.name }} would <b>not recommend</b> this product.</text>
			</li>
		</ul>
	</div>
`,


})