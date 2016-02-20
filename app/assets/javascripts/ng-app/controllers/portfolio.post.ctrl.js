var app = angular.module('portfolioApp')

 app.controller('portfolioPostCtrl', ['$scope', '$stateParams','$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','getPosts','getMessages','getProjects', function($scope, $stateParams, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, getPosts, getMessages, getProjects){


 	$scope.postId = $stateParams.postId

 	$scope.project = getProjects.projects[1];

	$scope.goBack = function() {
	  window.history.back();
	};

}])