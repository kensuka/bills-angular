/**
 * Created by kmukai on 9/19/2016.
 */
(function () {
    angular.module('bills')
        .config(function ($stateProvider) {
            $stateProvider.state('expenses', {
                url: '/expenses',
                templateUrl: 'app/expenses/expenses.html',
                controller: 'ExpensesController as ctrl'
            });
        })
})();