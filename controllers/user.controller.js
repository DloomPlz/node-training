const path = require('path')

let dao = require( path.join(__dirname, '..', 'dao') );

module.exports = {

	register(req, res) {
		res.json( {"test" : "foo"} )
	}

};