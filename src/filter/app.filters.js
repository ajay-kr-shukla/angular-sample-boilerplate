/**
* AngularJS Filters file 
* Here we are defining user custom defined filters for specific needs Ex. timeAgo
*/
(function () {
    'use strict';

    angular
        .module('application.filters', [])
        .filter('timeAgo', timeAgo);

    function timeAgo() {
        return function (input, p_allowFuture) {
            var substitute = function (stringOrFunction, number, strings) {
                    var string = stringOrFunction;
                    if ($.isFunction(stringOrFunction)) {
                        string = stringOrFunction(number, dateDifference);
                    }
                    var value = (strings.numbers && strings.numbers[number]) || number;
                    return string.replace(/%d/i, value);
                },
                nowTime = (new Date()).getTime(),
                date = (new Date(input)).getTime(),
                //refreshMillis= 6e4, //A minute
                allowFuture = p_allowFuture || false,
                strings = {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years"
                },
                dateDifference = nowTime - date,
                words,
                seconds = Math.abs(dateDifference) / 1000,
                minutes = seconds / 60,
                hours = minutes / 60,
                days = hours / 24,
                years = days / 365,

                // var strings = this.settings.strings;
                prefix = strings.prefixAgo,
                suffix = strings.suffixAgo;
            var separator = strings.wordSeparator;
            if (strings.wordSeparator === undefined) {
                separator = " ";
            }

            if (allowFuture) {
                if (dateDifference < 0) {
                    prefix = strings.prefixFromNow;
                    suffix = strings.suffixFromNow;
                }
            }

            words = seconds < 45 && substitute(strings.seconds, Math.round(seconds), strings) || seconds < 90 && substitute(strings.minute, 1, strings) || minutes < 45 && substitute(strings.minutes, Math.round(minutes), strings) || minutes < 90 && substitute(strings.hour, 1, strings) || hours < 24 && substitute(strings.hours, Math.round(hours), strings) || hours < 42 && substitute(strings.day, 1, strings) || days < 30 && substitute(strings.days, Math.round(days), strings) || days < 45 && substitute(strings.month, 1, strings) || days < 365 && substitute(strings.months, Math.round(days / 30), strings) || years < 1.5 && substitute(strings.year, 1, strings) || substitute(strings.years, Math.round(years), strings);

            return $.trim([prefix, words, suffix].join(separator));
            // conditional based on optional argument
            // if (somethingElse) {
            //     out = out.toUpperCase();
            // }
            // return out;
        };
    }

})();
