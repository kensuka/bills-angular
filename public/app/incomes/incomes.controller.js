/**
 * Created by kmukai on 9/19/2016.
 */
(function () {
    angular.module('bills')
        .controller('IncomesController', function ($scope) {
            console.log('Hello from IncomesController');
            var currentTime = new Date();
            $scope.currentTime = currentTime;
        });
})();