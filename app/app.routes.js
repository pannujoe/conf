(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun);

   

    function getStates() {
        return [
            {
                state: 'sessions',
                config: {
                    url: '/sessionlist',
                    templateUrl: 'app/sessions/sessionlist/sessions.html',
                    title: 'Sessions List',
                    controller: 'SessionCtrl',
                    controllerAs: 'vm',
                    allowAnonymous: true,
                    //resolve: {
                    //    schools: function (applicantResource) {
                    //        return applicantResource.getSchools().then(function (rsp) {
                    //            return rsp.data;
                    //        });
                    //    }

                    //}
                }

            },



        ];

    }

})();