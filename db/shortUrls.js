const { shortUrls } = require('./schema');
const { mongooseErrors } = require('../const');

/**
 * Create a short link
 * @param {{url: String, slug: String, isUserPreferredSlug: Boolean}} urlData
 * @returns {Promise<Boolean>} success of this insertion
 */
async function createShortUrl({ url, slug, isUserPreferredSlug }) {
	try {
		await shortUrls.create({ url, slug, isUserPreferredSlug });
		return true;
	} catch (err) {
		if (err.code === mongooseErrors.DUPLICATE_KEY) {
			return false;
		}

		throw err;
	}
}

async function getUrlBySlug(slug) {
	const result = await shortUrls.findOne({ slug }).lean();

	return result ? result.url : null;
}

module.exports = {
	createShortUrl,
	getUrlBySlug,
};
