var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../../templates/index.hbs');

var PostFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    submit: 'addPost'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addPost: function(event){
    event.preventDefault();
    this.collection.create({
      title: $('#title').val(),
      blog: $('#postEntry').val()
    });
    $('#title').val('');
    $('#postEntry').val('');
  }
});

module.exports = {
  'PostFormView': PostFormView
};
