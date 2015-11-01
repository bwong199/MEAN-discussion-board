var discussions_app = angular.module('discussions_app', ['ngRoute']);

 discussions_app.config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'static/partials/main.ejs',
            controller: 'UsersController'
        })
        .when('/dashboard',{
            templateUrl: 'static/partials/topic.ejs',
            controller: 'DashboardController'
        })
        .when('/topic/:id',{
            templateUrl: 'static/partials/post.ejs',
            controller: 'PostsController'
        })
        .when('/profile/:id',{
            templateUrl: 'static/partials/profile.ejs',
            controller: 'UsersController'
        })     
        .otherwise({
          redirectTo: '/'
        });
    });