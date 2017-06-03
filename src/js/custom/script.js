(function() {
        console.log('asd');
        //http://localhost/wordpress/wp-json/rest-basic/v1
        var app = angular.module("ngTests", []);
        console.log('asd2');

        app.controller('MainController', ['$http', function($http) {
          console.log('inside controller');

        }]);
      })();
