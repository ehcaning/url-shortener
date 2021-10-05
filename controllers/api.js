const { StatusCodes } = require('http-status-codes');
const { nanoid } = require('../services/idGenerator');
const config = require('../config');
const { shortUrls } = require('../db');
const errors = require('../services/errors');

async function getShortUrl(req, res, next) {
	try {
		const { url, preferredSlug } = req.body;
		const isUserPreferredSlug = preferredSlug != '';

		const startSlug = isUserPreferredSlug ? preferredSlug : nanoid.getID();
		const slug = await generateAndSaveSlug({ url, slug: startSlug, isUserPreferredSlug });

		const shortUrl = `${config.urlShortener.baseUrl}/${slug}`;

		res.status(StatusCodes.CREATED).json({ slug, shortUrl });
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getShortUrl,
};

async function generateAndSaveSlug({ url, slug, isUserPreferredSlug = false, retryCount = 0 }) {
	const dbInsertionResult = await shortUrls.createShortUrl({ url, slug, isUserPreferredSlug });
	if (dbInsertionResult) {
		return slug;
	}

	if (isUserPreferredSlug) {
		throw errors.SLUG_EXISTS;
	}

	retryCount++;
	if (retryCount >= config.urlShortener.maxRetryForRegenerateId) {
		throw errors.UNKNOWN_ERROR;
	}
	return await generateAndSaveSlug({ url, slug: nanoid.getID(), isUserPreferredSlug, retryCount });
}
