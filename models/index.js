"use strict";

const path = require('path');
const Sequelize = require('sequelize');

const config = {
	"dialect": "sqlite",
	//"host": "127.0.0.1",
	//"port":  "5432",
	"username": null,
	"password": null,
	"database": "rest",
	"storage": "./db.sqlite"
};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
let db = {};

let Article = sequelize.import(path.join(__dirname, "article.model"));
db["Article"] = Article;

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;



