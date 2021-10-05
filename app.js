const config = require('./config');
const express = require('express');
require('./db/connection');
const app = express();
app.disable('x-powered-by');
app.use(express.json());

const routes = require('./routes');
app.use('/api', routes.api);
app.use('/', routes.redirect);

// API Error Handler
app.use(require('./services/errors/handler'));

app.listen(config.server.port, () => {
	console.log(`app running on 127.0.0.1:${config.server.port}`);
});
