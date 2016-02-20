var app = angular.module('portfolioApp')

 app.controller('resumeCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','getPosts','getMessages','getProjects', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, getPosts, getMessages, getProjects){

 		//geting resume title
		$scope.title = getUser.data[0].dash[4].title;
 		//geting resume color
		$scope.primaryColor = getUser.data[0].dash[4].bgColor;
 		$scope.posts = getPosts.posts

 		$scope.toggleSidenav = function(menuId) {
	      $mdSidenav(menuId).toggle();
	    };
}])