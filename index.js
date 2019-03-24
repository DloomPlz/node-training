const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '/angular')));

const controllers = require(path.join(__dirname, 'routes'));
controllers(app);

app.listen(3333, function(){
	console.log('listening on port 3333');
});