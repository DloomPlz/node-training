const path = require('path')

let dao = require( path.join(__dirname, '..', 'dao') );

function send_response(d, res){
	if(d.error) res.status(400).send(d); //changer l'objet renvoyé en cas d'erreur
	res.status(200).send(d.data);
}

module.exports = {
	// req.body = json de la requete
	// req.params = parametres de la route

	list(req, res) { 
		dao.Article.list()
		.then( (d) => { send_response(d, res) })
		.catch( (d) => { send_response(d, res) });
	},

	get(req, res) {},

	create(req, res) {
		dao.Article.create(req.body)
		.then( (d) => { send_response(d, res) })
		.catch( (d) => { send_response(d, res) });
	},

	edit(req, res) {},

	destroy(req, res) {},

};