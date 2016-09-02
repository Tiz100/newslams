angular.module('starter.controllers', ['ionic'])


 .controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
     $scope.data = {};

     $scope.login = function () {
         LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
             $state.go('app.home');
         }).error(function (data) {
             var alertPopup = $ionicPopup.alert({
                 title: 'Login failed!',
                 template: 'Please check your credentials!'
             });
         });
     }
 })



.controller('AppCtrl', function ($scope, $state, $ionicModal, $timeout) {


    var homemenu = { stateName: 'app.home', labelName: 'home' };
    var chatmenu = { stateName: 'app.chat-rooms', labelName: 'Chat' };
    var sendaslam = { stateName: 'app.sendaslam', labelName: 'sendaslam' };
    var walls = { stateName: 'app.walls', labelName: 'walls' };

    $scope.subMenus = [homemenu, chatmenu, sendaslam, walls];
    $scope.activeSubMenuStateName = 'app.home';
    $scope.setActiveSubMenu = function (subMenuStateName) {
        return $state.go(subMenuStateName);
    };
})

.controller('SportCtrl', function ($scope, $window, List) {
    $scope.doRefresh = function () {
        List.all().then(function (newList) {
            //$scope.sportmodel = null;
            $scope.items = newList;
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$apply();
        });
    };

    $scope.doRefresh();
})


.controller('LeagueCtrl', function ($scope, $window, League) {

    $scope.doRefresh = function () {
        League.all().then(function (newList) {
            $scope.items = newList;
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$apply();
        });
     
    };

    $scope.doRefresh();
    console.log(League);
    $scope.League;
    
})




.controller('TeamCtrl', function ($scope, $window, Team) {

    $scope.doRefresh = function () {
        Team.all().then(function (newList) {
            $scope.items = newList;
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$apply();
        });
    };


    $scope.doRefresh();
});

    /*tesing sport*/


