var $ = require('jQuery');
var Backbone = require('backbone');
var views = require('./view/index');
var models = require('./models/post');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    //'detail/:id/': 'detail'
  },
  initialize: function(){
    this.collection = new models.PostCollection();
  },
  index: function(){
    var postList = new views.PostListView({
      collection: this.collection
    });
    $('.app').append(postList.render().el);

    this.collection.fetch();
  },
  // detail: function(postId){
  //   this.collection.fetch().done(function(){
  //     var post = this.collection.get(postId);
  //     var postDetail = new views.PostDetailView({model: post});
  //     $('.app').html(postDetail.render().el);
  //   }.bind(this));
  // }
});

var router = new Router();
module.exports = router;
