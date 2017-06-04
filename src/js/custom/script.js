(function() {
    //http://localhost/wordpress/wp-json/rest-basic/v1
    var app = angular.module("ngTests", []);
    var data = {
        'test': 'val1',
        'test2': 'val2'
    }

    app.controller('MainController', ['$http', function($http) {
      console.log('inside controller');
      this.returnData = 'nothing here yet';
        $http.post('http://localhost/wordpress/wp-json/rest-basic/v1', data).success(result){
          this.returnData = result;
        })

    }]);
})();
