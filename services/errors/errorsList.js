const { StatusCodes } = require('http-status-codes');

const errors = {
	UNKNOWN_ERROR: {
		status: StatusCodes.INTERNAL_SERVER_ERROR,
		message: 'Unknown server error',
	},
	BAD_REQUEST: {
		status: StatusCodes.BAD_REQUEST,
		message: 'Bad request',
	},
	SLUG_EXISTS: {
		status: StatusCodes.BAD_REQUEST,
		message: 'Given slug already exists',
	},
};

module.exports = errors;
