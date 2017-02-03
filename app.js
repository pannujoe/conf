// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================

					.state('home', {
            url: '/admin',
            templateUrl: '/app/adminlogin/login.html'
        })

				.state('sessionlist', {
            url: '/sessionslist',
            templateUrl: '/app/sessions/sessionlist/sessions.html'
        })

				.state('sessionform', {
            url: '/sessionsform',
            templateUrl: '/app/sessions/form/form.html'
        })


				 .state('userlist', {
            url: '/userlist',
            templateUrl: '/app/users/userList/userList.html'
        })

				.state('usermanger', {
            url: '/usermanger',
            templateUrl: '/app/users/usermanger/usermanger.html'
        })

				.state('elist', {
            url: '/exhibtorlistlist',
            templateUrl: '/app/exhibitors/exhibitorlist/exhibitor.html'
        })

				.state('emanger', {
            url: '/exhibitormanger',
            templateUrl: '/app/exhibitors/exhibitormanger/exhibitormanger.html'
        })

						.state('infolist', {
            url: '/infolist',
            templateUrl: '/app/eventInfo/infolist/infolist.html'
        })

				.state('infomanger', {
            url: '/infomanger',
            templateUrl: '/app/eventInfo/infomanger/infomanger.html'
        })

						.state('alertlist', {
            url: '/alertlist',
            templateUrl: '/app/alerts/alertlist/alertlist.html'
        })

				.state('alertmanger', {
            url: '/alertmanger',
            templateUrl: '/app/alerts/alertmanger/alertmanger.html'
        })

});