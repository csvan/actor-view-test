angular.module('HelloWorldApp', ['PingServices', 'ngRoute'])

    .config(function ($httpProvider, $routeProvider) {
        $routeProvider.when('/dynamic', {
            templateUrl: 'view/dynamic.html',
            controller: 'InnerController'
        });
    })

    .controller('OuterController', ['$scope', 'pingService', '$rootScope',
        function ($scope, ping, $rootScope) {
            $scope.binding = ping;
            $scope.$on('broadcast-message', function (e, msg) {
                $scope.broadcastMessage = msg;
                console.log(msg);
            });

            $rootScope.$on('emit-message', function (e, msg) {
                $scope.emitMessage = msg;
                console.log(msg);
            });
        }])

    .controller('InnerController', ['$scope', 'pingService', '$rootScope', function ($scope, ping, $rootScope) {
        $scope.binding = ping;
        $scope.$on('broadcast-message', function (e, msg) {
            $scope.broadcastMessage = msg;
            console.log(msg);
        });

        $rootScope.$on('emit-message', function (e, msg) {
            $scope.emitMessage = msg;
            console.log(msg);
        });
    }]);
