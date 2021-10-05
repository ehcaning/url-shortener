const config = require('../../config');
const schema = require('./schema');
const BaseError = require('../../services/errors/base-error');
const { StatusCodes } = require('http-status-codes');

/**
 * generic validator
 * @param {Joi.ObjectSchema} schema schema to validate with
 * @param {any} data data to validate
 */
function genericValidator(schema, data) {
	const { error } = schema.validate(data, config.validator.joiConfigs);
	if (error) {
		throw new BaseError({
			message: error.message,
			status: StatusCodes.BAD_REQUEST,
		});
	}
}

function getShortUrl(req, res, next) {
	try {
		genericValidator(schema.getShortUrl.body, req.body);
		return next();
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getShortUrl,
};
