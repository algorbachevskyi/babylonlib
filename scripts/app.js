; 'use strict';

/* App Module */

var blApp = angular.module('blApp', [
    'lumx',
    'ui.router',
    'blAppControllers'
]);

blApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('index', {
                url: "/main",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/main.html",
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('404', {
                url: "/404",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/404.html"
                    }
                }
            })
            .state('books', {
                url: "/books",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/books.html",
                        controller: 'BooksCtrl'
                    }
                }
            })
            .state('authors', {
                url: "/authors",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/authors.html",
                        controller: 'AuthorsCtrl'
                    }
                }
            })
            .state('translators', {
                url: "/translators",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/translators.html",
                        controller: 'TranslatorsCtrl'
                    }
                }
            })
            .state('illustrators', {
                url: "/illustrators",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/illustrators.html",
                        controller: 'IllustratorsCtrl'
                    }
                }
            })
            .state('contacts', {
                url: "/contacts",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/contacts.html",
                        controller: 'ContactsCtrl'
                    }
                }
            })
            .state('shop', {
                url: "/shop",
                views : {
                    mainView: {
                        templateUrl: "scripts/views/shop.html",
                        controller: 'ShopCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise("/main");

//        $locationProvider.html5Mode(true);

    }]);

/* Controllers Module */

var blAppControllers = angular.module('blAppControllers', []);