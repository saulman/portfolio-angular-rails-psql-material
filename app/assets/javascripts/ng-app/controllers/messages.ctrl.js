var app = angular.module('portfolioApp')

 app.controller('messagesCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','getPosts','getMessages','getProjects', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, getPosts, getMessages, getProjects){

 	$scope.QuestionsColor = '#FDD835';

 	$scope.messages = getMessages.messages;

 	//geting blog title
	$scope.title = getUser.data[0].dash[1].title;			
 	//geting messages color
    $scope.primaryColor = getUser.data[0].dash[1].bgColor;

    $scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();

    };
  
		
}])