//console.log('Hello World!');
var $ = require('jquery');
var BlogCollection = require('./models/post.js').BlogCollection;
var BlogFormView = require('./view/index.js').BlogFormView;

var blogs = new BlogCollection();

//blogs.add([{key1: 'test'}]);

var blogForm = new BlogFormView({collection: blogs});
$('.app').append(blogForm.render().el);
