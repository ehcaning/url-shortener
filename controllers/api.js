const { StatusCodes } = require('http-status-codes');
const { nanoid } = require('../services/idGenerator');
const config = require('../config');

function getShortUrl(req, res, next) {
	try {
		const { url, preferredSlug } = req.body;

		const slug = nanoid.getID();
		const shortUrl = `${config.urlShortener.baseUrl}/${slug}`;

		// TODO: save to database

		res.status(StatusCodes.CREATED).json({ slug, shortUrl });
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getShortUrl,
};
