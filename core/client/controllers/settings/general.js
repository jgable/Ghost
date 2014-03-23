
// TODO: Can this be a module somehow?
var validator = window.validator;

var SettingsGeneralController = Ember.ObjectController.extend({
    actions: {
        'save': function () {
            // TODO: Validate and save settings
        },

        'closeModal': function () {
            console.log('closeModal controller');
        },

        'acceptModal': function () {
            console.log('acceptModal controller');
        },

        'rejectModal': function () {
            console.log('rejectModal controller');
        }
    }
});

export default SettingsGeneralController;