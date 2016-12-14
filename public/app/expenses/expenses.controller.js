/**
 * Created by kmukai on 9/19/2016.
 */
(function () {
    angular.module('bills')
        .controller('ExpensesController', function ($scope, MovementService) {
            var self = this;
            self.saveExpense = saveExpense;
            self.movement = newMovement();
            self.edit = edit;
            self.findAllIncomes = findAllExpenses;
            self.delete = deleteMovement;

            findAllExpenses();

            function edit(expense) {
                self.movement = angular.copy(expense)
            }

            function deleteMovement(id) {
                MovementService.delete(id)
                    .then(function () {
                        findAllExpenses();
                    })
            }

            function findAllExpenses() {
                MovementService.findAllExpenses()
                    .then(function (data) {
                        self.expenses = data;
                    }, function (data) {
                        console.log(data);
                    });
            }


            function saveExpense() {
                self.movement.date = new Date(self.movement.date);

                MovementService.saveExpense(self.movement)
                    .then(function (data) {
                        if(self.movement.id){
                            findAllExpenses();
                        }else{
                            self.expenses.push(data);
                        }
                        self.movement = newMovement();
                    }, function (data) {
                        console.log(data);
                    })
            }


            function newMovement() {
                return {
                    description: '',
                    amount: '',
                    date: new Date()
                };
            }

        });
})();