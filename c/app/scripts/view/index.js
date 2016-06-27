
var $ = require('jquery');
var Backbone = require('backbone');
var postItemTemplate = require('../../templates/index.hbs');

var PostListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(post){
    var postItem = new PostItemView({
      model: post
    });
    this.$el.append(postItem.render().el);
  }

});

var PostItemView = Backbone.View.extend({
  tagName: 'li',
  template: postItemTemplate,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

// var PostDetailView = Backbone.View.extend({
//   render: function(){
//     this.$el.html(???);
//   }
//});

module.exports = {
  'PostItemView': PostItemView,
  'PostListView': PostListView
};
