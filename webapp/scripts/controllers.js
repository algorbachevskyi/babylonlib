
var blAppControllers = angular.module('blAppControllers', []);

blAppControllers.controller('MenuCtrl', ['$scope', '$log',
    function($scope, $log) {

        $scope.menu = {
            opened: false
        };

        $log.info('Into menu ctrl');

    }]);

//-----------------------------------------------------------

blAppControllers.controller('MainCtrl', ['$scope', '$log',
    function($scope, $log) {

        $log.info('Into main ctrl');

        $('body').css('overflow','hidden');

        $scope.moveDown = function() {
            $.fn.fullpage.moveSectionDown();
        };

        $scope.moveUp = function() {
            $.fn.fullpage.moveSectionUp();
        }
    }]);

//-----------------------------------------------------------

blAppControllers.controller('BooksCtrl', ['$scope', '$log',
    function($scope, $log) {

        $log.info('Into books ctrl');

//        $.fn.fullpage.setAllowScrolling(false);
//        $.fn.fullpage.setKeyboardScrolling(false);
        $('body').css('overflow','visible');

//
//        $(window).off('hashchange');
//        $(document).off('click', '#fullPage-nav a');
//        $('.section').off('click', '.toSlide');
//        $(document).off('click', '.fullPage-slidesNav a');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('BookCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $scope.mySlides = [
            '/webapp/imgs/bn5.jpg',
            '/webapp/imgs/bn5-1.jpg',
            '/webapp/imgs/bn5-2.jpg',
            '/webapp/imgs/bn5-3.jpg'
        ];

        $log.info('Into book ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('AuthorsCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into authors ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('AuthorCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into author ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('TranslatorsCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into translators ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('TranslatorCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into translator ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('DrawersCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into drawers ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('DrawerCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into drawer ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('ContactsCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into contacts ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('ShopCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $scope.clickedFab = function() {
            $log.info('CLICKED!');
//            $('.hidden-content').addClass('show');
            setTimeout(function(){
                $('.add-to-cart-fab').addClass('add-to-cart-fab-hover');
            },200);
            setTimeout(function(){
                $('.hidden-content').addClass('show');
            },500)
        };

        $scope.clickedCancel = function() {

            setTimeout(function(){
                $('.hidden-content').removeClass('show');
            },200);
            setTimeout(function(){
                $('.add-to-cart-fab').removeClass('add-to-cart-fab-hover');
            },500);
        };

        $log.info('Into shop ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('ProductCtrl', ['$scope', '$log', '$routeParams',
    function($scope, $log, $routeParams) {

        $('body').css('overflow','visible');

        $scope.mySlides = [
            '/webapp/imgs/shop/1/eco-bag.jpg',
            '/webapp/imgs/shop/1/eco-bag2.jpg',
            '/webapp/imgs/shop/1/eco-bag3.jpg',
            '/webapp/imgs/shop/1/eco-bag4.jpg'
            ];

        $log.info('Into product ctrl', $routeParams.productId);

    }]);

//-----------------------------------------------------------

blAppControllers.controller('CartCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into Cart ctrl');
    }]);
