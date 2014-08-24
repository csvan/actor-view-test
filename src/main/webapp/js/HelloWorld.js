angular.module('HelloWorldApp', ['PingServices', 'ngRoute'])

    .config(function ($httpProvider, $routeProvider) {
        $routeProvider.when('/dynamic', {
            templateUrl: 'view/dynamic.html',
            controller: 'DynamicController'
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

    .controller('DynamicController', ['$scope', 'pingService', '$rootScope', function ($scope, ping, $rootScope) {

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

try {
    destroy_F3939974694831CWEL3();
} catch (e) {
}
try {
    var s = function () {
        if (typeof angular === 'undefined' || typeof angular.element === 'undefined')return void 0; else return angular.element(document.querySelector('#NGU4XH1Z320B3BVQAT24')).scope();
    };

    var t = function () {
        return typeof s() !== 'undefined'
    };
    var f = function () {
        s().$apply(function () {
            s().$emit('emit-message', 'Outer emitted ping received');
        });
    };
    var d = function () {
        if (net_liftmodules_ng_q[0].t()) {
            for (i = 0; i < net_liftmodules_ng_q.length; i++) {
                net_liftmodules_ng_q[i].f();
            }
            net_liftmodules_ng_q = void 0;
        } else {
            setTimeout(function () {
                d();
            }, 100);
        }
    };
    if (typeof net_liftmodules_ng_q === 'undefined' && t()) {
        f();
    } else {
        if (typeof net_liftmodules_ng_q === 'undefined') {
            net_liftmodules_ng_q = [];
            setTimeout(function () {
                d();
            }, 100);
        }
        net_liftmodules_ng_q.push({t: t, f: f});
    }
    ;
} catch (e) {
    liftComet.lift_cometError(e);
}
try {
    destroy_F3939974694831CWEL3 = function () {
    };
} catch (e) {
}
if (lift_toWatch['F3939974694831CWEL3'] !== undefined) lift_toWatch['F3939974694831CWEL3'] = '393997469551';
