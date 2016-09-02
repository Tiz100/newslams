angular.module('starter.services', [])

    .service('LoginService', function ($q) {
        return {
            loginUser: function (name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (name == 'user' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })


.factory('List', function ($ionicPopup) {
    var url = 'http://booyahslamv1.azurewebsites.net';
    var client = new WindowsAzure.MobileServiceClient(url);
    var SportTable = client.getTable('Sport');

    function refreshDisplay() {
        return SportTable
            .read()
            .then(createList, handleError);
    }

    function createList(items) {
        return items;
    }

    function handleError(error) {
        var text = error + (error.request ? ' - ' + error.request.status : '');
        console.error(text);
        console.log('error', error.request.status);
        if (error.request.status == '0' || error.request.status == '404') {
            $ionicPopup.alert({
                title: 'Connection Failure',
                template: 'Connection with backend can not be established.'
            });
        }
    }
    return {
        all: function () {
            return refreshDisplay();
        },
    };
})

.factory('League', function ($ionicPopup) {
    var url = 'http://booyahslamv1.azurewebsites.net';
    var client = new WindowsAzure.MobileServiceClient(url);
    var LeagueTable = client.getTable('League');

    function refreshDisplay() {
        return LeagueTable
            .read()
            .then(createList, handleError);
    }

    function createList(items) {
        return items;
    }

    function handleError(error) {
        var LeagueName = error + (error.request ? ' - ' + error.request.status : '');
        console.error(LeagueName);
        console.log('error', error.request.status);
        if (error.request.status == '0' || error.request.status == '404') {
            $ionicPopup.alert({
                title: 'Connection Failure',
                template: 'Connection with backend can not be established.'
            });
        }
    }
    return {
        all: function () {
            return refreshDisplay();
        },
    };
})






.factory('Team', function ($ionicPopup) {
    var url = 'http://booyahslamv1.azurewebsites.net';
    var client = new WindowsAzure.MobileServiceClient(url);
    var TeamTable = client.getTable('Team');

    function refreshDisplay() {
        return TeamTable
            .read()
            .then(createTeamList, handleError);
    }

    function createTeamList(items) {
        return items;
    }

    function handleError(error) {
        var text = error + (error.request ? ' - ' + error.request.status : '');
        console.error(text);
        console.log('error', error.request.status);
        if (error.request.status == '0' || error.request.status == '404') {
            $ionicPopup.alert({
                title: 'Connection Failure',
                template: 'Connection with backend can not be established.'
            });
        }
    }
        return {
        all: function () {
            return refreshDisplay();
        },
    }
});


///*testing sport*/


//.factory('Team', function ($ionicPopup) {
//    var url = 'http://booyahslamv1.azurewebsites.net';
//    var client = new WindowsAzure.MobileServiceClient(url);
//    var TeamTable = client.getTable('Team');

//    function refreshDisplay() {
//        return TeamTable
//            .read()
//            .then(createTeamList, handleError);
//    }

//    function createTeamList(items) {
//        return items;
//    }

//    function handleError(error) {
//        var text = error + (error.request ? ' - ' + error.request.status : '');
//        console.error(text);
//        console.log('error', error.request.status);
//        if (error.request.status == '0' || error.request.status == '404') {
//            $ionicPopup.alert({
//                title: 'Connection Failure',
//                template: 'Connection with backend can not be established.'
//            });
//        }
//    }

//    function deleteItem(item) {
//        return TeamTable
//            .del({
//                id: item.id
//            })                                  // Async send the deletion to backend
//            .then(refreshDisplay, handleError); // Update the UI        
//    }

//    function addItem(team) {
//        return TeamTable.insert({
//            text: team,
//            complete: false
//        }).then(refreshDisplay, handleError);
//    }

//    function checklistChange(item) {
//        return TeamTable
//            .update({
//                id: item.id,
//                complete: item.complete
//            })                                  // Async send the update to backend
//            .then(refreshDisplay, handleError); // Update the UI    
//    }

//    return {
//        all: function () {
//            return refreshDisplay();
//        },
//        deleteItem: function (item) {
//            return deleteItem(item)
//        },
//        addItem: function (team) {
//            return addItem(team);
//        },
//        checklistChange: function (item) {
//            return checklistChange(item)
//        }
//    }
//});
