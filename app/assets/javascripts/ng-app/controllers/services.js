//var app = angular.module('demo')

app.factory('getUser', [function(){
  var obj = {
        data: [{
        "id": "1",
        "first_name": "Saulius",
        "last_name" : "Skeirys",
        "address": "1100 N Lasalle Blvd.",
        "city": "Chicago",
        "state": "Il",
        "country": "United States",
        "email":"saulius@skeirys.com",
        "link_github": "github.com/saulman",
        "phone_number": "6303452431",
        "image" : "./images/saul.jpg",
        "about" : "As esu labai kietas",
 
        dash: [{
          link : '',
          bgColor : '#81C784',
          txtColor : '#EEEEEE',
          title: 'Dashboard',
          icon: 'dashboard'
        },
        {
          link : '',
          bgColor : '#FDD835',
          txtColor : '#EEEEEE',
          title: 'Messages',
          icon: 'question_answer'
        },
        {
          link : '',
          bgColor : '#673AB7',
          txtColor : '#EEEEEE',
          title: 'Blog',
          icon: 'view_list'
        },
        {
          link : '',
          bgColor : '#29B6F6',
          txtColor : '#EEEEEE',
          title: 'Portfolio',
          icon: 'view_carousel'
        },
        {
          link : '',
          bgColor : '#FFA726',
          txtColor : '#EEEEEE',
          title: 'Resume',
          icon: 'description'
        },
        {
          link : '',
          bgColor : '#F44336',
          txtColor : '#EEEEEE',
          title: 'Contacts',
          icon: 'call'
        }],

        contacts : [{
            icon: 'email',
            link: '',
            desc: 'saulius@skeirys.com',
            title: 'Email'
          },
          {
            icon: 'call',
            link: '',
            desc: '630-345-2431',
            title: 'Phone'
          },
          {
            icon: 'github-box',
            link: '',
            desc: 'github.com/saulman',
            title: 'GitHub'
          }]
      }]

  };
  return obj;
}]),


app.factory('getPosts', [function(){
  var obj = {
    posts: [{
        "user_id": "1",
        "post_id" : "1",
        "title": "What is the best city to live?",
        "sub_title" : "Guess?",
        "category" : "Category",
        "icon" : "grade",
        "icon_color" : "#9FA8DA",
        "content": "The best place to live is Chicago",
        "main_image" : "./images/design1.jpg",
        "views" : "152",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "post_id" : "2",
        "title": "What is the best city to live?",
        "sub_title" : "Guess?",
        "category" : "Category",
        "icon" : "layers",
        "icon_color" : "#CE93D8",
        "content": "The best place to live is Chicago",
        "main_image" : "./images/design2.jpg",
        "views" : "108",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "post_id" : "3",
        "title": "What is the best city to live?",
        "sub_title" : "Guess?",
        "category" : "Category",
        "icon" : "place",
        "icon_color" : "#80CBC4",
        "content": "The best place to live is Chicago",
        "main_image" : "./images/design3.jpg",
        "views" : "5",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "post_id" : "3",
        "title": "What is the best city to live?",
        "sub_title" : "Guess?",
        "category" : "Category",
        "icon" : "place",
        "icon_color" : "#80CBC4",
        "content": "The best place to live is Chicago",
        "main_image" : "./images/design3.jpg",
        "views" : "5",
        "date": "11/12/15"
      }]

  };
  return obj;
}]);

app.factory('getMessages', [function(){
  var obj = {
    messages: [{
        "user_id": "1",
        "msg_id" : "1",
        "question": "How are you doing?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am fine.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
       {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
       {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
       {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "3",
        "question": "Where do you live?",
        "question_icon": "timer_auto",
        "answer" : "I live in Chicago.",
        "publish" : "Y",
        "date": "11/13/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "msg_id" : "2",
        "question": "How old are you?",
        "question_icon": "timer_auto",
        "answer" : "Thank you, I am 24.",
        "publish" : "Y",
        "date": "11/12/15"
      }]
  };
  return obj;
}]);

app.factory('getProjects', [function(){
  var obj = {
    projects: [{
        "user_id": "1",
        "project_id" : "1",
        "title": "Sportomeistrai design",
        "sub_title" : "Guess?",
        "content": "Created design & other features",
        "main_image" : "/assets/images/design1.jpg",
        "keywords" : [ "php", "javascript","wordpress"], 
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "project_id" : "2",
        "title": "Codesaurs",
        "sub_title" : "Guess?",
        "content": "The best place to live is Chicago",
        "main_image" : "./images/design2.jpg",
        "keywords" : [ "php", "javascript","wordpress"], 
        "date": "11/12/15"
      },
      {
        "user_id": "1",
        "project_id" : "3",
        "title": "What is the best city to live?",
        "sub_title" : "Guess?",
        "content": "The best place to live is Chicago",
        "main_image" : "./images/design3.jpg",
        "keywords" : [ "php", "javascript","wordpress"], 
        "date": "11/12/15"
      }]

  };
  return obj;
}]);

app.factory('getReferences', [function(){
  var obj = {
    references: [{
        "user_id": "1",
        "ref_id" : "1",
        "first_name": "Simonas",
        "last_name" : "Puskorius",
        "comp": "Adform",
        "country" : "Lithuania",
        "description" : "The best place to live is Chicago", 
        "short_description": "His experience led the team to next level"
      },
      {
        "user_id": "1",
        "ref_id" : "2",
        "first_name": "Sportomeistrai design",
        "last_name" : "Guess?",
        "comp": "Created design & other features",
        "country" : "assets/images/design1.jpg",
        "description" : [ "php", "javascript","wordpress"], 
        "short_description": "11/12/15"
      },
      {
        "user_id": "1",
        "ref_id" : "3",
        "first_name": "Sportomeistrai design",
        "last_name" : "Guess?",
        "comp": "Created design & other features",
        "country" : "./images/design1.jpg",
        "description" : [ "php", "javascript","wordpress"], 
        "short_description": "11/12/15"
      }]

  };
  return obj;
}]);



