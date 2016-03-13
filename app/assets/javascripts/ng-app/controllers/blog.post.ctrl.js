
/*
var app = angular.module('portfolioApp')

app.factory('getPost', ['$resource', function($resource){
  return $resource('/blog/:id.json', {}, {
    show: { method: 'GET' },
  //  update: { method: 'PUT', params: {id: '@id'} },
  //  delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]); 

 app.controller('blogShowCtrl', ['$scope', '$resource','$location','$mdSidenav', '$stateParams','getPost', function($scope, $resource, $location, $mdSidenav, $stateParams, getPost){

	$scope.post = getPost.get({id: $stateParams.id})
	$scope.update = function(){
		if ($scope.userForm.$valid){
		  User.update({id: $scope.user.id},{user: $scope.user},function(){
		    $location.path('/');
		  }, function(error) {
		    console.log(error)
		  });
		}
	};

	$scope.goBack = function() {
	  window.history.back();
	};

}])*/