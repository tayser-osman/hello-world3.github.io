const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
	res.send('Homepage');
});

app.get('/contact-us', function(req, res, next) {
	res.send('Contact us page');
});

app.get('/about', function(req, res, next) {
	res.send('About page');
});

app.get('/services', function(req, res, next) {
	res.send('Services page');
});

app.get('/products', function(req, res, next) {
	res.send('Products page');
});

app.get('/products/:id', function(re, res, next) {
	res.send(`Product ${id} page`);
});

app.get('/faq', function(req, res, next) {
	res.send('FAQ page');
});

app.get('/terms', function(req, res, next) {
	res.send('Terms page');
});

app.get('/privacy', function(req, res, next) {
	res.send('Privacy page');
});

app.listen(3000, () => console.log('server is running on port 3000..'));
