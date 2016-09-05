(function () {
    'use strict';

    angular
        .module('starter')
        .factory('teamFactory', teamFactory);

    //teamFactory.$inject = [];

    function teamFactory() {
        var service = {
            data: { userTeam: '',
                userName: 'bob',
                contact:'noone'
            },
            setTeam: setTeam,
            getTeam: getTeam,
            getUserName: getUserName,
            setContact: setContact,
            getContact: getContact
        };

        return service;
        ////////////////
        function setTeam(team) {
            this.data.userTeam = team;
        }
        function getTeam() {
            return this.data.userTeam;
        }
        function setContact(contact) {
            this.data.contact = contact;
        }
        function getContact() {
            return this.data.contact;
        }
        function getUserName() {
            return this.data.userName;
        }        
    };
})();
