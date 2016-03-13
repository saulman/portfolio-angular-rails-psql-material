  var app = angular.module('portfolioApp')

app.factory('allPosts', ['$resource',function($resource){
  return $resource('/blog.json', {},{
    query: { method: 'GET', isArray: true},
    create: { method: 'POST' }
  })
}]);

 app.factory('getPost', ['$resource', function($resource){
  return $resource('/blog/:id.json', {}, {
    show: { method: 'GET' },
  //  update: { method: 'PUT', params: {id: '@id'} },
  //  delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]); 


 app.controller('blogCtrl', ['$scope', '$state', '$stateParams','$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','allPosts','getMessages','getProjects', function($scope, $state, $stateParams,$mdBottomSheet, $mdSidenav, $mdDialog, getUser, allPosts, getMessages, getProjects){

 		//geting blog title
		$scope.title = getUser.data[0].dash[2].title;
 		//geting blog color
		$scope.primaryColor = getUser.data[0].dash[2].bgColor;
 		//$scope.posts = getPosts.posts
 		$scope.posts = allPosts.query();

 		//getPosts.query(function(data){
      //	  $scope.posts = data;
       // $scope.movies = data.movies;
    //	 });

		//$scope.postId = $stateParams.id
 		
  		//$state.transitionTo('blog.post');

//$state.go($state.current, {}, {reload: true});
 		$scope.toggleSidenav = function(menuId) {
	      $mdSidenav(menuId).toggle();
	    };
}])


 app.controller('blogShowCtrl', ['$scope', '$resource','$location','$mdSidenav', '$stateParams','getPost', function($scope, $resource, $location, $mdSidenav, $stateParams, getPost){

  $scope.post = getPost.get({id: $stateParams.id})
  /*$scope.update = function(){
    if ($scope.userForm.$valid){
      User.update({id: $scope.user.id},{user: $scope.user},function(){
        $location.path('/');
      }, function(error) {
        console.log(error)
      });
    }
  };*/

  $scope.goBack = function() {
    window.history.back();
  };

}])


app.controller("blogNewCtrl", ['$scope', '$resource', 'allPosts', '$location', function($scope, $resource, allPosts, $location) {
  //$scope.post = {addresses: [{street1: '', street2: '', city: '', state: '', country: '', zipcode: '' }]}

  $scope.colors =  [{
            name: 'Yellow',
            value: '#FFEE58'
          },
          {
            name: 'Blue',
            value: '#42A5F5'
          },
          {
            name: 'Purple',
            value: '#AB47BC'
          },
          {
            name: 'red',
            value: '#EF5350'
          }];

    $scope.categories =  [{
            name: 'Motivation'
          },
          {
            name: 'Education'
          },
          {
            name: 'Self-learning'
          },
          {
            name: 'Personal News'
          }];
console.log("scope loaded")

 $scope.post = {}
  $scope.save = function () {

      allPosts.create({post: $scope.post}, function(){
        $location.path('/blog');
      }, function(error){
        console.log(error)
      });
    }
}]);