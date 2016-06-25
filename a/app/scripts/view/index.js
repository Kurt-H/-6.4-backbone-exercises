var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../../templates/index.hbs');

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    submit: 'addBlog'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addBlog: function(event){
    event.preventDefault();
    this.collection.create({
      title: $('#title').val(),
      blog: $('#blogEntry').val()
    });
    $('#title').val('');
    $('#blogEntry').val('');
  }
});

module.exports = {
  'BlogFormView': BlogFormView
};
