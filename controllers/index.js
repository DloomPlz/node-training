const path = require('path')

module.exports = {
	Users: require( path.join(__dirname, 'user.controller') ),
	Articles: require( path.join(__dirname, 'article.controller') ),
};
