/**
 * Created by kmukai on 9/19/2016.
 */

(function () {
    angular.module('bills')
        .config(function($stateProvider){
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardController as ctrl'
                })
        });
})();