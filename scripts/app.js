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
                controller: 'BooksCtrl'
            }).
            when('/authors', {
                templateUrl: 'scripts/views/authors.html',
                controller: 'AuthorsCtrl'
            }).
            otherwise({
                redirectTo: '/main'
            });
    }]);

blApp.directive('fullpageJs', function(){

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).fullpage({
                afterLoad : function(anchorLink, index){
                    console.log('Loaded!');
                    switch (index) {
                        case 3 :
                            $('.up-button').show();
                            $('.down-button').fadeOut();
                            break;
                        case 1 :
                            $('.down-button').show();
                            $('.up-button').fadeOut();
                            break;
                        default:
                            $('.up-button').show();
                            $('.down-button').show();
                            break;
                    }
                }
            });
        }
    }

});