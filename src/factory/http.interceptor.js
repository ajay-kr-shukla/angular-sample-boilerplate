angular.module('factory.interceptor', []).factory('TimestampMarker',  TimestampMarker);

TimestampMarker.$inject = [];
function TimestampMarker() {
    var timestampMarker = {
        request: function(config) {
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function(response) {
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return timestampMarker;
}
