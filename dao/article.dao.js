const path = require('path');
const models = require(path.join(__dirname, "..", "models"));

function is_valid(article) {
	if (! article.contenu) {
		return({
			data: null,
			error: "Contenu ne peut pas etre vide",
		});
	}
	return({
		data: null,
		error: null,
	});
}

module.exports = {

	list() {
		return new Promise( (resolve, reject) => {

			return models.Article.findAll()
			.then( articles =>
				resolve({
					data: articles,
					error: null,
				})
			)
			.catch( err => 
				reject({
					data: null,
					error: err,
				})
			);

		});
	},

	create(new_article) {
		return new Promise( (resolve, reject) => {

			const isValid = is_valid(new_article);
			if(isValid.error !== null) 
				reject(isValid);
			
			return models.Article.create(new_article)
			.then( (article) => {
				resolve({
					data: article,
					error: null,
				})
			})
			.catch( (err) => {
				reject({
					data: null,
					error: err,
				})
			});

		});
	},
}