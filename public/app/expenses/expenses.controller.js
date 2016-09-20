/**
 * Created by kmukai on 9/19/2016.
 */
(function () {
    angular.module('bills')
        .controller('ExpensesController', function($scope){
            console.log('Hello from ExpensesController');
            var currentTime = new Date();
            $scope.currentTime = currentTime;
        });
})();