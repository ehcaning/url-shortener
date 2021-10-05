const mongoose = require('mongoose');

const schema = mongoose.Schema(
	{
		url: { type: String, required: true },
		slug: { type: String, required: true, unique: true },
	},
	{
		versionKey: false,
		timestamps: true,
	},
);
module.exports = mongoose.model('ShortUrls', schema, 'ShortUrls');
