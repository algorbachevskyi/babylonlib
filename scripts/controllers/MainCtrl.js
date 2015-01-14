; 'use strict';

blAppControllers.controller('MainCtrl', ['$scope', '$location', '$log', '$http', '$state',
    function($scope, $location, $log, $http, $state) {

        $log.debug('In Main Controller!');

        // initialize fullpaje.js

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
        };

        $scope.moveUp = function() {
            $.fn.fullpage.moveSectionUp();
        }

    }]);