//console.log('Hello World!');
var $ = require('jquery');
var PostCollection = require('./models/post.js').PostCollection;
var PostFormView = require('./view/index.js').PostFormView;

var posts = new PostCollection();

//blogs.add([{key1: 'test'}]);

var postForm = new PostFormView({collection: posts});
$('.app').append(postForm.render().el);
