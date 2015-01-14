; 'use strict';

blAppControllers.controller('BooksCtrl', ['$scope', '$location', '$log', '$http', '$state',
    function($scope, $location, $log, $http, $state) {

        $log.debug('In Books Controller!');
        // hack code for Fullpage.js Angular conflict
//        $.fn.fullpage.setAllowScrolling(false);
//        $.fn.fullpage.setKeyboardScrolling(false);
//        $.fn.fullpage.destroy();

    }]);