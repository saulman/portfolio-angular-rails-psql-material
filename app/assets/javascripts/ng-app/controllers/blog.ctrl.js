  var app = angular.module('portfolioApp')

 app.controller('blogCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','Posts','getUser','getPosts','getMessages','getProjects', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, Posts, getUser, getPosts, getMessages, getProjects){

 		//geting blog title
		$scope.title = getUser.data[0].dash[2].title;
 		//geting blog color
		$scope.primaryColor = getUser.data[0].dash[2].bgColor;
 		//$scope.posts = getPosts.posts
 		$scope.posts = Posts.query();
 		
 		$scope.toggleSidenav = function(menuId) {
	      $mdSidenav(menuId).toggle();
	    };
}])