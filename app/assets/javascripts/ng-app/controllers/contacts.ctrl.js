var app = angular.module('portfolioApp')

 app.controller('contactsCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','getUser', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, getUser){

 	//geting blog title
	$scope.title = getUser.data[0].dash[5].title;
	//geting resume color
	$scope.primaryColor = getUser.data[0].dash[5].bgColor;
	
	$scope.user = getUser.data[0];

	$scope.contacts = getUser.data[0].contacts;

	$scope.imagePath = "http://conradhotels3.hilton.com/resources/media/ch/en_US/img/shared/carousel/main/CN_chicagosunset.jpg"

	$scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
}])