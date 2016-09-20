/**
 * Created by kmukai on 9/19/2016.
 */
(function () {
    angular.module('bills')
        .config(function ($stateProvider) {
            $stateProvider
                .state('incomes', {
                    url: '/incomes',
                    templateUrl: 'app/incomes/incomes.html',
                    controller: 'IncomesController as ctrl'
                });
        });
})();