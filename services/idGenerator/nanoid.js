const { nanoid } = require('nanoid');
const config = require('../../config');

function getID() {
	return nanoid(config.urlShortener.length);
}

module.exports = {
	getID,
};
