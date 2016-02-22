  var app = angular.module('portfolioApp')

  app.controller('naviCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','$location','getUser', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $location, getUser){
    
      $scope.imagePath = 'images/chicago_sunny.jpg';
   

      $scope.user = getUser.data[0];

      $scope.menu = getUser.data[0].dash;

      $scope.location = $location.path();

     if($scope.location == "/" || $scope.location == "/dashboard"){
            $scope.leftOpen = true
          
        } else {
             $scope.leftOpen = false
         
        }





     

      $scope.timeline = [
        {
          link : '',
          evenType: 'description',
          eventName: 'Update in Resume',
          eventMessage: 'Updated Job Description.',
          eventTime: '3 hours ago',
          eventColor: '#FFA726'
        },
        {  
          link : '',
          evenType: 'view_list',
          eventName: 'Update in Blog',
          eventMessage: 'New post was added.',
          eventTime: '11 hours ago',
          eventColor: '#3F51B5'
        },
        {  
          link : '',
          evenType: 'person',
          eventName: 'Update in Personal Details',
          eventMessage: 'Updated address.',
          eventTime: '3d ago',
          eventColor: '#F44336'  
        } 
      ];
   }]); 