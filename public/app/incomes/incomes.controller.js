/**
 * Created by kmukai on 9/19/2016.
 */
(function () {
    angular.module('bills')
        .controller('IncomesController', function ($scope, MovementService) {
            var self = this;
            self.saveIncome = saveIncome;
            self.movement = newMovement();
            self.edit = edit;
            self.findAllIncomes = findAllIncomes;
            self.delete = deleteMovement;

            findAllIncomes();

            function deleteMovement(id) {
                MovementService.delete(id)
                    .then(function () {
                        findAllIncomes();
                    })
            }

            function edit(income) {
                self.movement = angular.copy(income)
            }

            function findAllIncomes() {

                MovementService.findAllIncomes()
                    .then(function (data) {
                        self.incomes = data;
                    }, function (data) {
                        console.log(data);
                    });
            }

            function saveIncome() {
                self.movement.date = new Date(self.movement.date);

                MovementService.saveIncome(self.movement)
                    .then(function (data) {
                        if(self.movement.id){
                            findAllIncomes();
                        }else{
                            self.incomes.push(data);
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