var Backbone = require('backbone');


var BlogModel = Backbone.Model.extend({
  initialize: function(){
    console.log('initialized');
  }
});

var BlogCollection = Backbone.Collection.extend({
  model: BlogModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/ksposts/'
});



module.exports = {
  'BlogModel': BlogModel,
  'BlogCollection': BlogCollection
};
