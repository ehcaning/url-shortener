const env = require('@ehcan/envparser');

const config = {
	server: {
		port: env.num('HTTP_PORT', 3000),
	},
	urlShortener: {
		length: env.num('SHORT_URL_LENGTH', 8),
	},
	validator: {
		joiConfigs: {
			abortEarly: false,
			allowUnknown: true,
			stripUnknown: true,
		},
		url: {
			minLength: env.num('URL_MIN_LENGTH', 5),
			maxLength: env.num('URL_MAX_LENGTH', 512),
		},
		preferredSlug: {
			minLength: env.num('PREFERREDSLUG_MIN_LENGTH', 5),
			maxLength: env.num('PREFERREDSLUG_MAX_LENGTH', 20),
		},
	},
};

module.exports = config;
