const path = require('path');

const controllers = require(path.join(__dirname, '..', 'controllers'));

function routes_users(app) {
	app.post('/users/register', controllers.Users.register);
}

function routes_articles(app) {
	app.get('/articles', controllers.Articles.list);
	app.post('/articles', controllers.Articles.create);
	app.get('/articles/:id', controllers.Articles.get);
	app.put('/articles/:id', controllers.Articles.edit);
	app.delete('/articles/:id', controllers.Articles.destroy);
}

module.exports = function(app) {
	routes_users(app);
	routes_articles(app);
};