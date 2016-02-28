  var app = angular.module('portfolioApp')

 app.controller('blogCtrl', ['$scope', '$state', '$stateParams','$mdBottomSheet','$mdSidenav', '$mdDialog','Posts','getUser','getPosts','getMessages','getProjects', function($scope, $state, $stateParams,$mdBottomSheet, $mdSidenav, $mdDialog, Posts, getUser, getPosts, getMessages, getProjects){

 		//geting blog title
		$scope.title = getUser.data[0].dash[2].title;
 		//geting blog color
		$scope.primaryColor = getUser.data[0].dash[2].bgColor;
 		$scope.posts = getPosts.posts
 		//$scope.posts = Posts.query();
		$scope.postId = $stateParams.id
 	
  		//$state.transitionTo('blog.post');

//$state.go($state.current, {}, {reload: true});
 		$scope.toggleSidenav = function(menuId) {
	      $mdSidenav(menuId).toggle();
	    };
}])