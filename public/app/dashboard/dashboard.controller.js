/**
 * Created by kmukai on 9/19/2016.
 */
(function () {
    angular.module('bills')
        .controller('DashboardController', function ($scope, MovementService) {
            $scope.labels = ["Expenses", "Incomes"];
            $scope.title = 'Resume'
            $scope.data = [0, 0];
            $scope.colors = [ '#f44336', '#4caf50', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']

            MovementService.incomeAmount()
                .then(function (amount) {
                    $scope.data[1] = amount;
                })
            MovementService.expenseAmount()
                .then(function (amount) {
                    $scope.data[0] = amount;
                })
        });
})();