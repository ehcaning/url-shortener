const { shortUrls } = require('../db');
const errors = require('../services/errors');

async function redirect(req, res, next) {
	try {
		const { slug } = req.params;

		const url = await shortUrls.getUrlBySlug(slug);
		if (!url) {
			throw errors.SLUG_NOT_FOUND;
		}

		// TODO: track visit

		res.redirect(url);
	} catch (err) {
		next(err);
	}
}

module.exports = {
	redirect,
};
