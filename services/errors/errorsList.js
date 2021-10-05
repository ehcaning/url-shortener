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
};

module.exports = errors;
