(function() {
    'use strict';
    var app = angular.module('gstApp', ['ui.router']);
    app.controller('LoginCtrl', function($http, $scope) {
        $scope.user = {
            username: "",
            password: ""
        };
        $scope.getUserDetails = function() {
            $http.post("http://localhost:8000/loginDetails", $scope.user).then(function() {
                console.log('Done!');
                $scope.user = {};
            }).then(function() {
                console.log('Failed!');
            });
        };
    });
})();