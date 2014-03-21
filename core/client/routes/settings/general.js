import AuthenticatedRoute from 'ghost/routes/authenticated';

var SettingsGeneralRoute = AuthenticatedRoute.extend({
    model: function () {
        return ajax('/ghost/api/v0.1/settings/?type=blog,theme,app');
    }
});

export default SettingsGeneralRoute;