var express = require('express');
var app = express()
var server = app.listen(3000, function() {
	console.log('app listening');
});
app.use(express.static('public'))
