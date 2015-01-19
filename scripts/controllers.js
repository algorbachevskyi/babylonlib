
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

blAppControllers.controller('AuthorsCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into authors ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('TranslatorsCtrl', ['$scope', '$log',
    function($scope, $log) {

        $('body').css('overflow','visible');

        $log.info('Into translators ctrl');
    }]);