const { visitLog } = require('./schema');

async function saveLog({ ip, slug }) {
	return await visitLog.create({ ip, slug });
}

module.exports = {
	saveLog,
};
