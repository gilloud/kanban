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
'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',                    'owner': 'gilles'
                }, {
                    'id': '124',
                    'title': 'task2',
              'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'title': 'task5',
                    'owner': 'gilles'
                }]
            }, {
                'title': 'todo',
                'taskOrder': '2',
                'value': [{
                    'id': '128',
                    'title': 'task6',

                    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'owner': 'gilles'
                }]
            }, {
                'title': 'in progress',
                'taskOrder': '3',
                'value': [ {
                    'id': '132',
                    'description': 'Je teste une petite description courte... Je teste une deuxième description courte... Je teste une 3ème description courte...',

                    'title': 'task9',
                    'owner': 'gilles'
                }, {
                    'id': '133',
'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'title': 'task9',
                    'owner': 'gilles'
                }]
            }, {
                'title': 'unit testing',
                'taskOrder': '4',
                'value': [ {
                    'id': '134',
                    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

                    'title': 'task9',
                    'owner': 'gilles'
                }]
            }, {
                'title': 'waiting integration',
                'taskOrder': '5',
                'value': [ {
                    'id': '134',
                    'description': 'Je teste une petite description courte... Je teste une deuxième description courte... Je teste une 3ème description courte...',

                    'title': 'task9',
                    'owner': 'gilles'
                }]
            }, {
                'title': 'integration',
                'taskOrder': '6',
                'value': [ {
                    'id': '135',
                    'description': 'Je teste une petite description courte... Je teste une deuxième description courte... Je teste une 3ème description courte...',

                    'title': 'Review of a little piece of code',
                    'owner': 'gilles'
                }]
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
'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

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

        $scope.goLeft = function (id, pos) {
            alert('Item ' + id + ' has been moved left ' + pos);
            // Call to webservice and

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