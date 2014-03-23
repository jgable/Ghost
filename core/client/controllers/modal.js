
export default Ember.ObjectController.extend({
    actions: {
        close: function () {
            console.log('modalController close');
            return this.send('closeModal');
        },

        accept: function () {
            console.log('modalController accept');
            return this.send('acceptModal');
        },

        reject: function () {
            console.log('modalController reject');
            return this.send('rejectModal');
        }
    }
});