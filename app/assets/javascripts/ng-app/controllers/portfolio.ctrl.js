var app = angular.module('portfolioApp')

 app.controller('portfolioCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','getPosts','getMessages','getProjects', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, getPosts, getMessages, getProjects){

 	//geting portfolio title
	$scope.title = getUser.data[0].dash[3].title;
	//geting portfolio color
	$scope.primaryColor = getUser.data[0].dash[3].bgColor;
	
 	 $scope.projects = getProjects.projects

 	 $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
}])