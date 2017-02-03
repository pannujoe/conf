(function () {
    'use strict';

    var app = angular.module('app', [
        'services',
        'ui.router',
        'ui.bootstrap',
        'helpers',
        'ngSanitize',
        'ngCsv',
        'ngBootbox'
    ]);




    app.config(["$stateProvider",
								"$urlRouterProvider",
								function($stateProvider, $urlRouterProvider){
									$urlRouterProvider.otherwise("/");

									$stateProvider

											//Home
											.state("form", {
												url:"/sessions/form",
												templateUrl:"/app/sessions/form/form.html"
					})
				}]
			);

})();