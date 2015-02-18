; 'use strict';

/* App Module */

var blApp = angular.module('blApp', [
    'ngRoute',
    'lumx',
    'ngTouch',
    'angular-flexslider',
    'ngCart',
    'blAppControllers'
]);

blApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'webapp/scripts/views/main.html',
                controller: 'MainCtrl'
            }).
            when('/books', {
                templateUrl: 'webapp/scripts/views/books.html',
                controller: 'BooksCtrl'
            }).
            when('/book/:bookId', {
                templateUrl: 'webapp/scripts/views/book.html',
                controller: 'BookCtrl'
            }).
            when('/authors', {
                templateUrl: 'webapp/scripts/views/authors.html',
                controller: 'AuthorsCtrl'
            }).
            when('/author/:authorId', {
                templateUrl: 'webapp/scripts/views/author.html',
                controller: 'AuthorCtrl'
            }).
            when('/translators', {
                templateUrl: 'webapp/scripts/views/translators.html',
                controller: 'TranslatorsCtrl'
            }).
            when('/translator/:translatorId', {
                templateUrl: 'webapp/scripts/views/translator.html',
                controller: 'TranslatorCtrl'
            }).
            when('/drawers', {
                templateUrl: 'webapp/scripts/views/drawers.html',
                controller: 'DrawersCtrl'
            }).
            when('/drawer/:drawerId', {
                templateUrl: 'webapp/scripts/views/drawer.html',
                controller: 'DrawerCtrl'
            }).
            when('/contacts', {
                templateUrl: 'webapp/scripts/views/contacts.html',
                controller: 'ContactsCtrl'
            }).
            when('/shop', {
                templateUrl: 'webapp/scripts/views/shop.html',
                controller: 'ShopCtrl'
            }).
            when('/shop/:productId', {
                templateUrl: 'webapp/scripts/views/product.html',
                controller: 'ProductCtrl'
            }).
            when('/cart', {
                templateUrl: 'webapp/scripts/views/cart.html',
                controller: 'CartCtrl'
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

blApp.directive('fancybox', function(){

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).fancybox({
                openEffect	: 'fade',
                closeEffect	: 'fade',
                padding : 0,
                overlayOpacity : 1
            });
        }
    }

});