
export default Ember.Component.extend({
	classNames: ['modal'],

	didInsertElement: function () {
		// Kinda hacky left overs from original modal view
		this.$().parent().fadeIn(10, function () {
			$(this).addClass("in");
		});
	}
});