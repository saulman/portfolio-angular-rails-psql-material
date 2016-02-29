var app = angular.module('portfolioApp')

 app.controller('portfolioCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','getPosts','getMessages','getProjects', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, getPosts, getMessages, getProjects){

 	//geting portfolio title
	$scope.title = getUser.data[0].dash[3].title;
	//geting portfolio color
	$scope.primaryColor = getUser.data[0].dash[3].bgColor;
	
 	 $scope.projects = getProjects.projects
	$scope.imagePath = 'http://tactivedigital.com/wp-content/uploads/2015/03/slide1.jpg';

 	 $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
}])