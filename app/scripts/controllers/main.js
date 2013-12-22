'use strict';

angular.module('kanbanApp').service('kanbanService', function () {

    return {
        getTasks: function () {
            return [{
                'title': 'backlog',
                'taskOrder': '1',
                'value': [{
                    'id': '123',
                    'title': 'task1',
                    'description': 'Je teste une petite description courte... Je teste une deuxième description courte... Je teste une 3ème description courte...',
                    'owner': 'gilles'
                }, {
                    'id': '124',
                    'title': 'task2',
                    'owner': 'gilles'
                }, {
                    'id': '125',
                    'title': 'task3',
                    'owner': 'gilles'
                }, {
                    'id': '126',
                    'title': 'task4',
                    'owner': 'gilles'
                }, {
                    'id': '127',
                    'title': 'task5',
                    'owner': 'gilles'
                }]
            }, {
                'title': 'todo',
                'taskOrder': '2',
                'value': [{
                    'id': '128',
                    'title': 'task6',
                    'description': 'Je teste une petite description courte... Je teste une deuxième description courte... Je teste une 3ème description courte...',
                    'owner': 'gilles'
                }]
            }, {
                'title': 'in progress',
                'taskOrder': '3',
                'value': []
            }, {
                'title': 'unit testing',
                'taskOrder': '4',
                'value': []
            }, {
                'title': 'waiting integration',
                'taskOrder': '5',
                'value': []
            }, {
                'title': 'integration',
                'taskOrder': '6',
                'value': []
            }, {
                'title': 'done',
                'taskOrder': '7',
                'value': [{
                    'id': '129',
                    'title': 'task7',
                    'owner': 'gilles'
                }, {
                    'id': '130',
                    'title': 'task8',
                    'owner': 'gilles'
                }, {
                    'id': '131',
                    'description': 'Je teste une petite description courte... Je teste une deuxième description courte... Je teste une 3ème description courte...',

                    'title': 'task9',
                    'owner': 'gilles'
                }]
            }];

        }
    };

});

angular.module('kanbanApp')
    .controller('MainCtrl', function ($scope, kanbanService) {
        $scope.steps = [
            'backlog',
            'todo',
            'in progress',
            'unit testing',
            'waiting integration',
            'integration',
            'done'
        ];
        $scope.stepsObjects = kanbanService.getTasks();
        console.log($scope.stepsObjects);

        $scope.goLeft = function (id, pos) {
            alert('Item ' + id + ' has been moved left ' + pos);
            // Call to webservice andg

            // Refresh datas...
            $scope.stepsObjects = kanbanService.getTasks();
        };
        
        $scope.goRight = function (id, pos) {
            alert('Item ' + id + ' has been moved right ' + pos);
            // Call to webservice and

            // Refresh datas...
            $scope.stepsObjects = kanbanService.getTasks();
        };

        $scope.goElement = function (id) {
            alert('Going to element ' + id);
        };


        $scope.hasLeft = function (pos) {
            var tmpPos = pos;
            var elems = $scope.stepsObjects;
            for (var item in elems) {
                if (elems[item].taskOrder < tmpPos) {
                    tmpPos = elems[item].taskOrder;
                }
            }

            if (tmpPos < pos)
            {
                return true;
            }
            return false;
        };

        $scope.hasRight = function (pos) {
            var tmpPos = pos;
            var elems = $scope.stepsObjects;
            for (var item in elems) {
                if (elems[item].taskOrder > tmpPos) {
                    tmpPos = elems[item].taskOrder;
                }
            }

            if (tmpPos > pos)
            {
                return true;
            }
            return false;
        };
    });