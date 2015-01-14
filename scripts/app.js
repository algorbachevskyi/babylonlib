; 'use strict';

/* App Module */

var blApp = angular.module('blApp', [
    'ngRoute',
    'lumx',
    'blAppControllers'
]);

blApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'scripts/views/main.html',
                controller: 'MainCtrl'
            }).
            when('/books', {
                templateUrl: 'scripts/views/books.html',
                controller: 'MainCtrl'
            }).
            when('/authors', {
                templateUrl: 'scripts/views/authors.html',
                controller: 'AuthorsCtrl'
            }).
            otherwise({
                redirectTo: '/main'
            });
    }]);