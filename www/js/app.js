// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


angular.module('starter', ['ionic', 'ngCordova', 'starter', 'starter.controllers', 'starter.services', 'pubnub.angular.service', 'ngNotify', 'ngCordovaOauth'])
//angular.module('starter', ['ionic', 'starter', 'starter.controllers', 'pubnub.angular.service', 'ngNotify'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

    .run(['Pubnub', 'currentUser', function (Pubnub, currentUser) {
        Pubnub.init({
            publish_key: 'pub-c-74ba1088-ab7c-4f81-8ff8-657f35338ae9',
            subscribe_key: 'sub-c-de0a658a-2e4d-11e6-b700-0619f8945a4f',
            uuid: currentUser,
//                origin: 'pubsub.pubnub.com',
            ssl: true
        });

    }])

    .run(['ngNotify', function (ngNotify) {
        ngNotify.config({
            theme: 'paster',
            position: 'top',
            duration: 250
        });

    }])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',

                    }
                }
            })

        .state('app.aboutus', {
            url: '/aboutus',
            views: {
                'menuContent': {
                    templateUrl: 'templates/aboutus.html'
                }
            }
        })

        .state('app.chooseteam', {
            url: '/chooseteam',
            views: {
                'menuContent': {
                    templateUrl: 'templates/chooseteam.html'
                }
            }
        })

        .state('app.choosecontact', {
            url: '/choosecontact',
            views: {
                'menuContent': {
                    templateUrl: 'templates/choosecontact.html'
                }
            }
        })

    .state('app.chat-rooms', {
        url: '/chat-rooms',
        views: {
            'menuContent': {
                templateUrl: 'templates/chat-rooms.html',
            }
        }
    })

    .state('app.sendaslam', {
        url: '/sendaslam',
        views: {
            'menuContent': {
                templateUrl: 'templates/sendaslam.html',
            }
        }
    })
        .state('app.walls', {
            url: '/walls',
            views: {
                'menuContent': {
                    templateUrl: 'templates/walls.html',
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })

    .state('app.chat-roomsTeam', {
        url: '/chat-roomsTeam',
        views: {
            'menuContent': {
                templateUrl: 'templates/chat-roomsTeam.html',
            }
        }
    });

    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
    //$urlRouterProvider.otherwise('/login');
})

