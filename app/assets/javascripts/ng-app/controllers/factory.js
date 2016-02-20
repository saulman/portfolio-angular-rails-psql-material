
var app = angular.module('portfolioApp'); 
//Factory
app.factory('Posts', ['$resource',function($resource){
  return $resource('/Posts.json', {},{
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  })
}]);