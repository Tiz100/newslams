(function () {
    'use strict';

    ContactsController.$inject = ['$state', 'MessageService', 'teamFactory', '$cordovaContacts','$cordovaDialogs', '$ionicPlatform'];

    angular.module('starter').controller('ContactsController', ContactsController);

    //contactsCtrl.$inject = ['$location', '$cordovaContacts'];

    function ContactsController($state, MessageService, teamFactory, $cordovaContacts, $cordovaDialogs, $ionicPlatform) {
        //function contactsCtrl($location, $cordovaContacts) {
        var vm = this;

        vm.getAllContacts = getAllContacts;
        vm.select = select;

        vm.selected = null;

        activate();

        function activate() {
            alert("$cordovaContacts " + $cordovaContacts);            
            getAllContacts();
        }

        //function getAllContacts() {
        //    $cordovaContacts.find({}).then(function (allContacts) { //omitting parameter to .find() causes all contacts to be returned
        //        vm.contacts = allContacts;
        //    }
        //    )
        //}

        function getAllContacts() {
            $ionicPlatform.ready(function() {  
                var options = {};
                options.filter = "";
                options.multiple = true;
                options.fields = ['displayName'];

                vm.contacts = [{
                    id: 0,
                    displayName: 'No contact selected'
                }, {
                    id: 1,
                    displayName: 'bob'
                }, {
                    id: 2,
                    displayName: 'simone'
                }, {
                    id: 3,
                    displayName: 'geoff'
                }]

                //$cordovaContacts.find({ filter: '', fields: ['displayName'] }).then(function (allContacts) { //omitting parameter to .find() causes all contacts to be returned
                //$cordovaContacts.find(options).then(function (allContacts) { //omitting parameter to .find() causes all contacts to be returned
                //    alert("$cordovaContacts " + $cordovaContacts);
                //    vm.contacts = allContacts;
                //    console.log(JSON.stringify(allContacts));
                //}, function (err) {
                //    console.log(err);
                //});
            })
        };

        function select() {
            if (vm.selected != '') {
                teamFactory.setContact(vm.selected);
                MessageService.initContact();
                $state.go('app.chat-rooms');
            }
        }


    }
})();
