/*global ic */
import postFixtures from 'ghost/fixtures/posts';
import userFixtures from 'ghost/fixtures/users';
import settingsFixtures from 'ghost/fixtures/settings';

var response = function (responseBody, status) {
    status = status || 200;
    var textStatus = (status === 200) ? 'success' : 'error';

    return {
        response: responseBody,
        jqXHR: { status: status },
        textStatus: textStatus
    };
};

var user = function (status) {
    return response(userFixtures.findBy('id', 1), status);
};

var post = function (id, status) {
    return response(postFixtures.findBy('id', id), status);
};

var posts = function (status) {
    return response({
        'posts': postFixtures,
        'page': 1,
        'limit': 15,
        'pages': 1,
        'total': 2
    }, status);
};

var settings = function (status) {
    console.log('settings response', settingsFixtures, status);
    return response(settingsFixtures, status);
};

var defineFixtures = function (status) {
    ic.ajax.defineFixture('/ghost/api/v0.1/posts', posts(status));
    ic.ajax.defineFixture('/ghost/api/v0.1/posts/1', post(1, status));
    ic.ajax.defineFixture('/ghost/api/v0.1/posts/2', post(2, status));
    ic.ajax.defineFixture('/ghost/api/v0.1/signin', user(status));
    ic.ajax.defineFixture('/ghost/api/v0.1/settings', settings(status));
};

export default defineFixtures;