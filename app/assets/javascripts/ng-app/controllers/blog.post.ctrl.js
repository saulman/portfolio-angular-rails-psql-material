var app = angular.module('portfolioApp')

 app.controller('blogPostCtrl', ['$scope', '$stateParams','$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','getPosts','getMessages','getProjects', function($scope, $stateParams, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, getPosts, getMessages, getProjects){


 	$scope.postId = $stateParams.postId

 	$scope.post = getPosts.posts[1];

	$scope.goBack = function() {
	  window.history.back();
	};

}])