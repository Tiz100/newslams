// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordovaOauth' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

   
  // setup an abstract state for the tabs directive
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
    })


    .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })


  // Each tab has its own nav history stack:

         
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

  .state('app.checklist', {
      url: '/checklist',
      views: {
        'menuContent': {
          templateUrl: 'templates/checklist.html',
        }
      }
  })


 

  $urlRouterProvider.otherwise('/login');
});
