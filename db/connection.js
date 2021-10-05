const config = require('../config');

const mongoose = require('mongoose');
mongoose.connect(config.mongodb.url, config.mongodb.options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Mongodb connected');
});
