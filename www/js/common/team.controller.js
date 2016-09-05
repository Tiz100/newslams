(function () {
    'use strict';

    TeamController.$inject = ['$state','MessageService', 'teamFactory'];

    angular
        .module('starter')
        .controller('TeamController', TeamController);

    function TeamController($state,MessageService,teamFactory) {
        var vm = this;

        vm.select = select;

        vm.team = [{
            id: 0,
            action: 'No selected team',
            visble: true
        }, {
                id: 1,
                action: 'team 1',
                visble: true
            }, {
                id: 2,
                action: 'team 2',
                visble: true
            }, {
                id: 3,
                action: 'team 3',
                visble: true
            }, {
                id: 4,
                action: 'team 4',
                visble: true
            }, {
                id: 5,
                action: 'team 5',
                visble: true
            }]

        vm.selected = null;

        activate();

        ////////////////

        function activate() { }

        function select() {
            if (vm.selected != ''){
                teamFactory.setTeam(vm.selected);
                MessageService.initA();
                $state.go('app.chat-roomsTeam');
            }
        }
    }
})();