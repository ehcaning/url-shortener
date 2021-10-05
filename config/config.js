const env = require('@ehcan/envparser');

const config = {
	server: {
		port: env.num('HTTP_PORT', 3000),
	},
	urlShortener: {
		length: env.num('SHORT_URL_LENGTH', 8),
		baseUrl: env.str('BASE_URL', 'http://localhost:3000'),
		maxRetryForRegenerateId: env.num('MAX_RETRY_FOR_REGENERATE_ID', 5),
		cacheTTL: env.num('SHORT_URL_CACHE_TTL', 2 * 60),
	},
	mongodb: {
		url: env.str('MONGODB', 'mongodb://localhost:27017/urlshortener'),
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	},
	redis: {
		host: env.str('REDIS_HOST', 'localhost'),
		port: env.num('REDIS_PORT', 6379),
		password: env.str('REDIS_PASSWORD', ''),
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
