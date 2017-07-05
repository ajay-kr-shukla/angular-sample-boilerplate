/**
 * APIWrapper Factory  file 
 * Here we are controlling & routing all the rest APIs request 
 * REST APIs - GET, POST, PUT, DELETE, PATCH
 * Auth Token is be applied on every request as per request
 * Method uploadMedia: for uploading files on API location  server
 */

angular.module('factory.APIWrapper', []).factory('APIWrapper', APIWrapper);

APIWrapper.$inject = [
    '$http',
    '$q',
    'API_CONST'
];

function APIWrapper($http, $q, API_CONST) {
    var basePath = API_CONST.BASE_PATH;
    var statusCodes = API_CONST.STATUS_CODES;
    var messageCodes = API_CONST.API_MESSAGES;
    var messageConsts = API_CONST.API_MSG_CONST;
    return {
        get: get,
        post: post,
        put: put,
        remove: deleteItem,
        removeWithBody: deleteItemWithBody,
        patch: patch,
        statusCodes: statusCodes,
        messageCodes: messageCodes,
        messageConsts: messageConsts,
        getUserToken: getUserToken,
        uploadMedia: uploadMedia,
        hasPendingRequests: hasPendingRequests
    };

    /*
     * method to check is any http request is going through
     */
    function hasPendingRequests() {
        return $http.pendingRequests.length > 0;
    }

    /*
     * PATCH API Method
     */
    function patch(uri, data) {
        return makeRequest('PATCH', uri, data);
    }

    /*
     * DELETE API Method
     */
    function deleteItem(uri, serverType) {
        return makeRequest('DELETE', uri, '', serverType);
    }

    /*
     * DELETE with body API Method
     */
    function deleteItemWithBody(uri, data, serverType) {
        return makeRequest('DELETE', uri, data, serverType);
    }

    /*
     * PUT API Method
     */
    function put(uri, data, serverType) {
        return makeRequest('PUT', uri, data, serverType);
    }


    /*
     * POST API Method
     */
    function post(uri, data, serverType) {
        return makeRequest('POST', uri, data, serverType);
    }


    /*
     * GET API Method
     */
    function get(uri, serverType) {
        return makeRequest('GET', uri, '', serverType);
    }

    /*
     * Common entry point for all http request
     */
    function makeRequest(verb, uri, data, serverType) {
        var defer = $q.defer();
        var auth_token = getUserToken();
        var authorizationHeader = '';
        if (auth_token) {
            authorizationHeader = 'Token ' + auth_token;
            console.log(authorizationHeader);
        }

        var config = {
            method: verb,
            url: actualBasePath + uri,
            headers: {
                "Authorization": authorizationHeader
            }
        };
        console.log("config", config);
        if (verb.match(/POST|PUT|PATCH/)) {
            config.data = data;
        }

        if (verb.match(/DELETE/) && data) {
            config.data = data;
            config.headers['Content-Type'] = 'application/json';
        }

        $http(config)
            .then(function(response) {
                defer.resolve(response);
            }, function(response) {
                defer.reject(response);
            });

        return defer.promise;
    }

    /*
     * fetching Auth token from local storage
     */
    function getUserToken() {
        return localStorageService.get('user_token');
    }


    /*
     * Uploading files on server by API Method
     */
    function uploadMedia(verb, uri, data) {
        var defer = $q.defer();
        var auth_token = getUserToken();
        var authorizationHeader = '';
        if (auth_token) {
            authorizationHeader = 'Token ' + auth_token;
            console.log(authorizationHeader);
        }
        var config = {
            method: verb,
            url: basePath + uri,
            headers: {
                'Content-Type': 'multipart/form-data',
                "authorization": authorizationHeader
            }
        };
        if (verb.match(/POST|PUT|PATCH/)) {
            config.data = data;
        }

        Upload
            .upload(config)
            .then(function(response) {
                defer.resolve(response);
            }, function(response) {
                defer.reject(response);
            });
        return defer.promise;
    }
}