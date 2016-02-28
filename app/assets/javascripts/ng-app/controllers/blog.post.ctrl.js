var app = angular.module('portfolioApp')

 app.controller('blogPostCtrl', ['$scope', '$stateParams','$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','getPosts','getMessages','getProjects', function($scope, $stateParams, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, getPosts, getMessages, getProjects){

 	//$scope.person = $scope.contacts[$stateParams.id];
 	$scope.postId = $stateParams.id

 	$scope.post = getPosts.posts[$stateParams.id];


	$scope.goBack = function() {
	  window.history.back();
	};

}])