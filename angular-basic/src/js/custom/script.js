(function() {
    //http://localhost/wordpress/wp-json/rest-basic/v1
    var app = angular.module("ngTests", []);
    var data = {
        'data': {
            'test': 'val1',
            'test2': 'val2'
        }
    };
    var config = data;


    app.controller('MainController', ['$scope', '$http', function($scope, $http) {
        this.returnData = 'nothing yet';
        var mcThis = this;

        var successCallback = function(response) {
            mcThis.returnData = response.data;
        };
        var errorCallback = function(response) {

        };
        $scope.resend = function() {
            $http.post('http://localhost/wordpress/wp-json/rest-basic/v1', data, config).then(successCallback, errorCallback);
        }





    }]);
})();
