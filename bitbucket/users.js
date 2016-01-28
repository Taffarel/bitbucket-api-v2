var util = require('util');
var AbstractApi = require("./abstract_api").AbstractApi;

/**
 * API wrapper for http://confluence.atlassian.com/display/BBDEV/Users
 */
var UserApi = exports.UserApi = function(api) {
    this.$api = api;
};

util.inherits(UserApi, AbstractApi);

(function() {

    /**
     * Get user data including the repository list
     */
    this.getUserData = function(username, callback) {
        this.$api.get("users/" + username, null, null, callback);
    };

}).call(UserApi.prototype);