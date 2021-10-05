const { shortUrls } = require('./schema');
const { mongooseErrors } = require('../const');
const config = require('../config');
const redisClient = require('./redis').getRedisClient();

/**
 * Create a short link
 * @param {{url: String, slug: String, isUserPreferredSlug: Boolean}} urlData
 * @returns {Promise<Boolean>} success of this insertion
 */
async function createShortUrl({ url, slug, isUserPreferredSlug }) {
	try {
		// mongodb
		await shortUrls.create({ url, slug, isUserPreferredSlug });

		// create in redis, we don't want to await for this one
		redisClient.set(getSlugKey(slug), url, 'EX', config.urlShortener.cacheTTL);

		return true;
	} catch (err) {
		if (err.code === mongooseErrors.DUPLICATE_KEY) {
			return false;
		}

		throw err;
	}
}

/**
 * Return url for a given slug
 * @param {String} slug
 * @returns {Promise<String>}
 */
async function getUrlBySlug(slug) {
	try {
		// first check cache
		const cacheedUrl = await redisClient.get(getSlugKey(slug));
		if (cacheedUrl) {
			return cacheedUrl;
		}

		const result = await shortUrls.findOne({ slug }).lean();
		if (!result) {
			return null;
		}

		redisClient.set(getSlugKey(slug), result.url, 'EX', config.urlShortener.cacheTTL);
		return result.url;
	} catch (err) {
		console.error(err);
		return null;
	}
}

module.exports = {
	createShortUrl,
	getUrlBySlug,
};

function getSlugKey(slug) {
	return `slug:${slug}`;
}
