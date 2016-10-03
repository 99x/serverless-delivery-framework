module.exports.users = function(event, context) {
    var user = require('./users');
    var path = event.path;
    var method = event.method;

    if (path == '/users/getUsers' && method == 'GET') {
        user.getUsers(event, context);
    } else if (path == '/users/createUser' && method == 'POST') {
        user.createUser(event, context);
    } else if (path == '/users/getUser' && method == 'POST') {
        user.getUser(event, context);
    } else {
        context.succeed("something wrong" + JSON.stringify(event, null, 2) + "path : " + path + "method : " + method);
    }
};
