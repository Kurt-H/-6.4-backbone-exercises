var $ = require('jquery');
//var = require('');
var ProfileCollection = require('./models/post.js').ProfileCollection;

console.log("Hello World!");

var profiles = new ProfileCollection();

profiles.add([{key1: 'test'}]);
