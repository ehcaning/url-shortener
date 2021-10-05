const { shortUrls, visitLog } = require('../db');
const errors = require('../services/errors');

async function redirect(req, res, next) {
	try {
		const { slug } = req.params;

		const url = await shortUrls.getUrlBySlug(slug);
		if (!url) {
			throw errors.SLUG_NOT_FOUND;
		}

		res.redirect(url);

		// track visit
		const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
		const logResult = visitLog.saveLog({ ip, slug });
		if (!logResult) {
			console.error('error on saving visit log');
		}
	} catch (err) {
		next(err);
	}
}

module.exports = {
	redirect,
};
