//console.log("Hello World!");
var $ = require('jquery');
var Backbone = require('backbone');
var router = require('./router');
// var PostCollection = require('./models/post.js').PostCollection;
// var PostListView = require('./view/index.js').PostListView;

$(function(){
  Backbone.history.start();
});

// var posts = new PostCollection();
//
// var postList = new PostListView({
//   collection: posts
// });
// $('.app').append(postList.render().el);
//
// posts.fetch();
