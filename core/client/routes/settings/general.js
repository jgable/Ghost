import AuthenticatedRoute from 'ghost/routes/authenticated';

var SettingsGeneralRoute = AuthenticatedRoute.extend({
    actions: {
        'uploadBlogLogo': function () {
            var modalCon = this.controllerFor('modal-upload-logo').set('model', {
                title: 'Upload Logo',
                closeable: true,
                confirm: true
            });
            
            return this.render('modal-upload-logo', {
                into: 'application',
                outlet: 'modal',
                controller: modalCon
            });
        },

        'uploadBlogCover': function () {
            this.controllerFor('modal-upload-cover').set('model', {
                title: 'Upload Cover Image',
                closeable: true,
                confirm: true
            });
            
            return this.render('modal-upload-cover', {
                into: 'application',
                outlet: 'modal'
            });
        },

        'closeModal': function () {
            console.log('closeModal');
        },

        'acceptModal': function () {
            console.log('acceptModal');
        },

        'rejectModal': function () {
            console.log('rejectModal');
        }
    },

    model: function () {
        return ajax('/ghost/api/v0.1/settings/?type=blog,theme,app');
    }
});

export default SettingsGeneralRoute;