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
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]); 


 app.controller('blogCtrl', ['$scope', '$state', '$stateParams','$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','allPosts', '$location',function($scope, $state, $stateParams,$mdBottomSheet, $mdSidenav, $mdDialog, getUser, allPosts, $location){

 		//geting blog title
		$scope.title = getUser.data[0].dash[2].title;
 		//geting blog color
		$scope.primaryColor = getUser.data[0].dash[2].bgColor;
 		//$scope.posts = getPosts.posts
 		var posts = allPosts.query();
    $scope.posts = posts;

 		//getPosts.query(function(data){
      //	  $scope.posts = data;
       // $scope.movies = data.movies;
    //	 });
     $location.path("/blog/1"); 
		
 		$scope.toggleSidenav = function(menuId) {
	      $mdSidenav(menuId).toggle();
	    };
}])


 app.controller('blogShowCtrl', ['$scope', '$resource','$location','$mdSidenav', '$stateParams','getPost','allPosts', function($scope, $resource, $location, $mdSidenav, $stateParams, getPost, allPosts){

  $scope.post = getPost.get({id: $stateParams.id})
  $scope.deletePost = function (postId) {
    if (confirm("Are you sure you want to delete this post?")){
      getPost.delete({ id: postId }, function(){
        $scope.posts = allPosts.query();
        $location.path('/');
      });
    }
  };

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


 $scope.post = {}
  $scope.save = function () {

      allPosts.create({post: $scope.post}, function(){
       $scope.posts = allPosts.query();
        $location.path('/blog');
      }, function(error){
        console.log(error)
      });
    }
}]);


   app.controller('blogEditCtrl', ['$scope', '$resource','$location','$mdSidenav', '$stateParams','getPost','allPosts', function($scope, $resource, $location, $mdSidenav, $stateParams, getPost, allPosts){

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

  
  $scope.post = getPost.get({id: $stateParams.id})
   $scope.update = function(){
    
      getPost.update({id: $scope.post.id},{post: $scope.post},function(){
        $location.path('/blog');
      }, function(error) {
        console.log(error)
      });
  };

}])