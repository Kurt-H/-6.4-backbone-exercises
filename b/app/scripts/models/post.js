var Backbone = require('backbone');

var ProfileModel = Backbone.Model.extend({
  initialize: function(){
    console.log('initialized');
  }
});

var ProfileCollection = Backbone.Collection.extend({
  model: ProfileModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/kscontacts/'
});


module.exports = {
  'ProfileModel': ProfileModel,
  'ProfileCollection': ProfileCollection
};
