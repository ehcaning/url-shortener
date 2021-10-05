const env = require('@ehcan/envparser');

const config = {
	server: {
		port: env.num('HTTP_PORT', 3000),
	},
};

module.exports = config;
