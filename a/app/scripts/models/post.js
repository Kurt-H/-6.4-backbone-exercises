var Backbone = require('backbone');


var PostModel = Backbone.Model.extend({
  initialize: function(){
    console.log('initialized');
  }
});

var PostCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/ksposts/'
});



module.exports = {
  'PostModel': PostModel,
  'PostCollection': PostCollection
};
