const config = require('../config');
const Redis = require('ioredis');
const redisConfig = {
	host: config.redis.host,
	port: config.redis.port,
};
if (config.redis.password != '') {
	redisConfig.password = config.redis.password;
}

const client = new Redis(redisConfig);

function getRedisClient() {
	return client;
}

module.exports = {
	getRedisClient,
};
