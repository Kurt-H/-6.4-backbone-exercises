//require jquery, backbone, template
var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../../templates/index.hbs');

var ProfileFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addContact'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addContact: function(event){
    event.preventDefault();
    this.collection.create({
      firstName: $('#firstname').val(),
      lastName: $('#lastName').val(),
      email: $('#email').val(),
      streetAddress: $('#streetAddress').val(),
      cityAddress: $('#cityAddress').val(),
      zipcode: $('#zipcode').val(),
      phone: $('#phone').val()
    });

    $('#firstname').val('');
    $('#lastName').val('');
    $('#email').val('');
    $('#streetAddress').val('');
    $('#cityAddress').val('');
    $('#zipcode').val('');
    $('#phone').val('');


  }
});

module.exports = {
  'ProfileFormView': ProfileFormView
};
