
var blAppControllers = angular.module('blAppControllers', []);

blAppControllers.controller('MainCtrl', ['$scope', '$log',
    function($scope, $log) {

        $log.info('Into main ctrl');
        $('#mainpage').fullpage({
            //Navigation
//        menu: true,
//        anchors:['1', '2','3'],
//        navigation: true,
//        navigationPosition: 'right',
            resize: false,

            afterLoad : function(anchorLink, index){
                $log.debug('Loaded!');
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

        $scope.moveDown = function() {
            $.fn.fullpage.moveSectionDown();
            $.fn.fullpage.destroy();
        };

        $scope.moveUp = function() {
            $.fn.fullpage.moveSectionUp();
        }
    }]);

//-----------------------------------------------------------

blAppControllers.controller('BooksCtrl', ['$scope', '$log',
    function($scope, $log) {

        $log.info('Into books ctrl');

        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);

    }]);

//-----------------------------------------------------------

blAppControllers.controller('AuthorsCtrl', ['$scope', '$log',
    function($scope, $log) {

        $log.info('Into authors ctrl');
    }]);

//-----------------------------------------------------------

blAppControllers.controller('TranslatorsCtrl', ['$scope', '$log',
    function($scope, $log) {

        $log.info('Into translators ctrl');
    }]);