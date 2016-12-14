/**
 * Created by kmukai on 10/5/2016.
 */
(function () {
    angular.module('bills')
        .config(function ($stateProvider) {
            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController as ctrl'
            });
        });
})();