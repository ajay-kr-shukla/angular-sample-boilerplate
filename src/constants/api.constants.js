/**
* APIMessages Module Controller file 
* Here we are defining message code, generic message strings for App
*/

(function () {
    'use strict';

    angular
        .module('constants.APIMessages', ['pascalprecht.translate'])
        .constant('API_CONST', (function () {
            return {
                STATUS_CODES: {
                    OK: 200,
                    CREATED: 201,
                    ACCEPTED: 202,
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    FORBIDDEN: 403,
                    NOT_FOUND: 404,
                    GONE: 410,
                    INTERNAL_SERVER_ERROR: 500,
                    BAD_GATEWAY: 502
                },
                BASE_PATH: '//api.qa.example.com/v1/',
                API_MESSAGES: {
                    "1000": "ERROR_UNKNOWN",
                    "1001": "ERROR_DUPLICATE_EMAIL",
                    "1002": "ERROR_INVALID_PASSWORD",
                    "1011": "ERROR_UNVERIFIED_EMAIL",
                    "1012": "ERROR_INVALID_CREDENTIALS",
                    "1013": "ERROR_REQUIRED_VALUE",
                    "1021": "ERROR_INVALID_CURRENT_PASSWORD",
                    "1022": "ERROR_PASSWORD_REUSED",
                    "1031": "ERROR_MAX_ATTEMPTS_PASSWORD_RESET",
                    "1032": "ERROR_NO_EMAIL",
                    "1033": "ERROR_TOKEN_EXPIRED",
                    "1041": "ERROR_VERIFICATION_LINK_EXPIRED",
                    "1042": "ERROR_INVALID_TOKEN",
                    "1043": "ERROR_MAX_ATTEMPTS_EMAIL_VERIFY",
                    "4001": "ERROR_REQUIRED",
                    "4002": "ERROR_NULL",
                    "4003": "ERROR_BLANK",
                    "4004": "ERROR_INVALID_EMAIL",
                    "2001": "OK_USER_REGISTERED",
                    "2021": "OK_PASSWORD_CHANGED",
                    "2031": "OK_PASSWORD_RESET_EMAIL",
                    "2032": "OK_PASSWORD_RESETED",
                    "2041": "OK_EMAIL_VERIFIED",
                    "2042": "OK_VERIFY_EMAIL"
                },
                API_MSG_CONST: {
                    "ERROR_UNKNOWN": "Unknown error occured",
                    "ERROR_DUPLICATE_EMAIL": "This email address is already tied to an existing account.",
                    "ERROR_INVALID_PASSWORD": "Your password must be at least 8 characters long and contain at least one number.",
                    "ERROR_UNVERIFIED_EMAIL": "Your email address has not been verified.  Please check your email for instructions.",
                    "ERROR_INVALID_CREDENTIALS": "Incorrect email or password provided.  Please check your information and try again.",
                    "ERROR_REQUIRED_VALUE": "Please provide a valid email address and password.",
                    "ERROR_INVALID_CURRENT_PASSWORD": "Incorrect password provided. Please re-enter your current password.",
                    "ERROR_PASSWORD_REUSED": "The password you entered is already in use. Please create a new password.",
                    "ERROR_MAX_ATTEMPTS_PASSWORD_RESET": "You have exceeded the number of password reset requests. Please wait 24 hours before submitting another request.",
                    "ERROR_NO_EMAIL": "This email address is currently not registered.",
                    "ERROR_TOKEN_EXPIRED": "Your password reset request has expired.  Please submit a new request.",
                    "ERROR_VERIFICATION_LINK_EXPIRED": "Your password reset request has expired. Please submit a new request.",
                    "ERROR_INVALID_TOKEN": "Your password reset request has expired.  Please submit a new request.",
                    "ERROR_MAX_ATTEMPTS_EMAIL_VERIFY": "You have exceeded the number of email verification requests. Please wait 24 hours before submitting another request.",
                    "OK_USER_REGISTERED": "You have successfully registered!",
                    "OK_PASSWORD_CHANGED": "You have successfully changed your password.",
                    "OK_PASSWORD_RESET_EMAIL": "Check your email and follow the instructions to reset your password.",
                    "OK_PASSWORD_RESETED": "Your password has been successfully reset.",
                    "OK_EMAIL_VERIFIED": "Your email address has been verified.",
                    "OK_VERIFY_EMAIL": "We have resent your email verification instructions.",
                    "ERROR_REQUIRED": "This field is required.",
                    "ERROR_NULL": "This field may not be null.",
                    "ERROR_BLANK": "This field may not be blank.",
                    "ERROR_INVALID_EMAIL": "Enter a valid email address.",
                    "EMAIL_VERIFICATION_EXPIRED": "Your email verification request has expired. Please submit a new request."
                }
            };
        })());
})();
