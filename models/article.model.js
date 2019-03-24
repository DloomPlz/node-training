module.exports = function(sequalize, DataTypes){
	const Article = sequalize.define("article", { 
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		contenu: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	});
	return Article;
};
