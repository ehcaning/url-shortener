const config = require('../../config');
const joi = require('joi');

const getShortUrl = {
	body: joi.object().keys({
		url: joi
			.string()
			.min(config.validator.url.minLength)
			.max(config.validator.url.maxLength)
			.regex(
				/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
			)
			.required()
			.messages({ 'string.pattern.base': 'incorrect url format' }),
		preferredSlug: joi
			.string()
			.min(config.validator.preferredSlug.minLength)
			.max(config.validator.preferredSlug.maxLength)
			.allow(null, ''),
	}),
};

const redirect = {
	params: joi.object().keys({
		slug: joi.string().required(),
	}),
};

module.exports = {
	getShortUrl,
	redirect,
};
