/**
 * Created by kmukai on 10/24/2016.
 */
(function(){
    angular.module('bills')
        .service('MovementService', function($q, $http, baseUrl){
            this.findAllExpenses = findAllExpenses;
            this.findAllIncomes = findAllIncomes;
            this.saveExpense = saveExpense;
            this.saveIncome = saveIncome;
            this.delete = deleteMovement;
            this.incomeAmount = incomeAmount;
            this.expenseAmount = expenseAmount;

            function incomeAmount() {
                var deferred = $q.defer();

                $http.get(baseUrl + '/api/movement/income/amount').then(function (response) {
                    deferred.resolve(response.data);
                }, function (data) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }
            function expenseAmount() {
                var deferred = $q.defer();

                $http.get(baseUrl + '/api/movement/expense/amount').then(function (response) {
                    deferred.resolve(response.data);
                }, function (data) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }

            function deleteMovement(id){
                var deferred = $q.defer();

                $http.delete(baseUrl + '/api/movement/' + id).then(function (response) {
                    deferred.resolve(response.data);
                }, function (data) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }

            function findAllExpenses(){
                var deferred = $q.defer();

                $http.get(baseUrl + '/api/movement/expenses').then(function (response) {
                    deferred.resolve(response.data);
                }, function (data) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }
            function findAllIncomes(){
                var deferred = $q.defer();

                $http.get(baseUrl + '/api/movement/incomes').then(function (response) {
                    deferred.resolve(response.data);
                }, function (data) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }

            function saveExpense(movement) {
                var deferred = $q.defer();

                $http.post(baseUrl + '/api/movement/expenses', JSON.stringify(movement)).then(function (response) {
                    deferred.resolve(response.data);
                }, function (data) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }
            function saveIncome(movement) {
                var deferred = $q.defer();

                $http.post(baseUrl + '/api/movement/incomes', JSON.stringify(movement)).then(function (response) {
                    deferred.resolve(response.data);
                }, function (data) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }
        })
})();