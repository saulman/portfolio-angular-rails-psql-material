var app = angular
    .module('portfolioApp', [
        'ngMaterial',
        'ngAnimate',
        'ui.router',
        'templates',
        'ngMdIcons',
        'ngResource'
    ])



app.config(function($stateProvider, $urlRouterProvider,$mdThemingProvider,$locationProvider){
 
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
    .state('home',{
        url: '/dashboard',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'dashboard/index.html',
                controller: 'mainCtrl'
            }
        }
    })
  
    .state('dashboard', {
        url: '/dashboard',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'dashboard/index.html',
                controller: 'mainCtrl'
            }
        }
 
    })

    .state('messages', {
        url: '/messages',
        views: {
            'navigation': {
               templateUrl: 'nav.html',
               controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'messages/messages.html',
                controller: 'messagesCtrl'
            }
        }
 
    })

    .state('blog', {
        
        url: '/blog',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'blog/index.html',
                controller: 'blogCtrl'
            }
            
        }         
    })
    /*
    .state('contacts.list', {
        url: '/list',
        templateUrl: 'contacts.list.html'
    })
*/
  .state('blog.new', {
        url: '/new',
        templateUrl: 'blog/new.html',
        controller: 'blogNewCtrl'
               
    })

    .state('blog.show', {
        url: '/:id',
        templateUrl: 'blog/show.html',
        controller: 'blogShowCtrl'
    })

    .state('blog.edit', {
        url: '/:id/edit',
        templateUrl: 'blog/edit.html',
        controller: 'blogEditCtrl'
    })
 
    
    

/*
    .state('blog', {
        url: '/blog',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'blog/blog.html',
                controller: 'blogCtrl'
            }
            
        }
    })

    .state('blog.post', {
      templateUrl: 'blog/blog.post.html',
      controller: 'blogPostCtrl'
    })


  .state('blogShow', {
        url: "/blog/:postId ",
         views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'blog/blog.html',
                controller: 'blogCtrl'
            }
        }
    })

    .state('blogNew', {
        url: "/blog/new",
         views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'blog/blog.new.html',
                controller: 'blogPostCtrl'
            }
        }
    })
*/

   .state('portfolio', {
        
        url: '/portfolio',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'portfolio/portfolio.html',
                controller: 'portfolioCtrl'
            }
            
        }         
    })
    /*
    .state('contacts.list', {
        url: '/list',
        templateUrl: 'contacts.list.html'
    })
*/
    .state('portfolio.post', {
        url: '/:id',
        templateUrl: 'portfolio/portfolio.post.html',
        controller: 'portfolioPostCtrl'
    })
/*

    .state('portfolio', {
        url: '/portfolio',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'portfolio/portfolio.html',
                controller: 'portfolioCtrl'
            }
        }
 
    })

    .state('portfolioPost', {
        url: "/portfolio/:postId ",
         views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'portfolio/portfolio.post.html',
                controller: 'portfolioPostCtrl'
            }
        }
    })
*/
    .state('resume', {
        url: '/resume',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'resume/resume.html',
                controller: 'resumeCtrl'
            }
        }
 
    })

    .state('contacts', {
        url: '/contacts',
        views: {
            'navigation': {
                templateUrl: 'nav.html',
                controller: 'naviCtrl'
            },
            'content': {
                templateUrl: 'contacts/contacts.html',
                controller: 'contactsCtrl'
            }
        }
    });

      // default fall back route
    $urlRouterProvider.otherwise('/dashboard');

    // enable HTML5 Mode for SEO
   // $locationProvider.html5Mode({
   // enabled: true,
   // requireBase: false
 // });

    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
          .primaryPalette('grey')

});

app.animation('.fade', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).fadeIn(1000, function() {
        done();
      });
    },
    leave: function(element, done) {
      $(element).fadeOut(1000, function() {
        done();
      });
    },
    move: function(element, done) {
      element.css('display', 'none');
      $(element).slideDown(500, function() {
        done();
      });
    }
  }
})


app.factory('Info', ['$resource',function($resource){
  return $resource('/info.json', {},{
    query: { method: 'GET', isArray: false},
    create: { method: 'POST' }
  })
}]);




   app.controller('mainCtrl', ['$scope', '$location','$mdBottomSheet','$mdSidenav', '$mdDialog','getUser','allPosts','getMessages','getProjects','Info', function($scope, $location, $mdBottomSheet, $mdSidenav, $mdDialog, getUser, allPosts, getMessages, getProjects,Info ){
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

   
     Info.query(function(data){
        $scope.posts = data.posts;
       // $scope.movies = data.movies;
      });

    $scope.CustomStyle = {};
    $scope.projectInfo = {}
    $scope.imagePath = 'http://tactivedigital.com/wp-content/uploads/2015/03/slide1.jpg';
     $scope.dash = 'dash';
    //geting blog title
    $scope.title = getUser.data[0].dash[0].title;
    //geting dashboard color
    $scope.primaryColor = getUser.data[0].dash[0].bgColor;
    //getting portfolio color
    $scope.PortfolioColor = getUser.data[0].dash[3].bgColor;

    $scope.posts = allPosts.query();
    $scope.messages = getMessages.messages;
    $scope.projects = getProjects.projects;

    $scope.isOpen = false;


    $scope.weather = [
      {
        day: 'Tue',
        tempDay: '65',
        tempNight: '56',
        icon: 'brightness_7'
      },
      {
        day: 'Wed',
        tempDay: '68',
        tempNight: '61',
        icon: 'brightness_7'
      },
      {
        day: 'Thu',
        tempDay: '78',
        tempNight: '64',
        icon: 'brightness_7'
      },
      {
        day: 'Fri',
        tempDay: '74',
        tempNight: '66',
        icon: 'brightness_7'
      },
      {
        day: 'Sat',
        tempDay: '80',
        tempNight: '72',
        icon: 'brightness_7'
      }
    ];

     

     $scope.go = function ( path ) {
        $location.path( path );
      };

       $scope.showConfirm = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Are you sure you want to send message?')
              .textContent('Your message will be reviewed by administrator before posting live.')
              .ariaLabel('message')
              .targetEvent(ev)
              .ok('Send it!')
              .cancel('Destroy');
        $mdDialog.show(confirm).then(function() {
          $scope.status = 'You decided to get rid of your debt.';
        }, function() {
          $scope.status = 'You decided to keep your debt.';
        });
      };

    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
    
    $scope.showAdd = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
        targetEvent: ev,
      })
      .then(function(answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.alert = 'You cancelled the dialog.';
      });
    };
  }]);

  app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Share', icon: 'share' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' },
    ];
    
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };

  app.directive('userListavatar', function() {
    return {
      replace: true,
      template: '<svg class="user-avatar" viewBox="0 0 128 128" height="50" width="50" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
    };
  });

  app.directive('userAvatar', function() {
    return {
      replace: true,
      template: '<svg class="user-avatar" viewBox="0 0 128 128" height="180" width="180" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
    };
  });

/*
app.factory('userService', function($rootScope, $http) {
    var userService = {};

    userService.data = {};

    //Gets the list of nuclear weapons
    userService.getUser = function() {
        $http.get('lib/user.json')
            .success(function(data) {
                userService.data.user = data[0];
            })
            .error(function (data, status, headers, config) {
             //  Do some error handling here
             console.log("User is not loaded")
            });

        return userService.data;
    };

    return userService;
});
*/
