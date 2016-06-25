var $ = require('jquery');
var ProfileFormView = require('./view/index.js').ProfileFormView;
var ProfileCollection = require('./models/post.js').ProfileCollection;

console.log('Hello World!');

var profiles = new ProfileCollection();

//profiles.add([{key1: 'test'}]);

//var blogForm = new BlogFormView({collection: blogs});
//$('.app').append(blogForm.render().el);
var profilesForm = new ProfileFormView({collection: profiles});
$('.app').append(profilesForm.render().el);
