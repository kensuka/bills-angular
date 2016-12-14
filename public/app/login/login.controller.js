/**
 * Created by kmukai on 10/5/2016.
 */
(function () {
    angular.module('bills')
        .controller('LoginController', function ($scope, $http) {
            var vm = this;

            vm.user = {
                username: '',
                password: ''
            };
            $http({
                url: 'http://localhost:8080/rest/message',
                headers: {'Set-Cookie': 'JSESSIONID=F29EA77F13E79D2C49E0F35C53CB928E'}
            })
                .then(function (response) {
                    console.log(response)
                }, function (response) {
                    console.log(response)
                });

            vm.login = function () {

                $http({
                    method: 'POST',
                    url: 'http://localhost:8080/login',
                    data: $.param(vm.user), //forms uer object
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data) {
                    console.log(data)
                });
            };


        });
})
();