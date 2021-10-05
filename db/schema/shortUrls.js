const mongoose = require('mongoose');

const schema = mongoose.Schema(
	{
		url: { type: String, required: true },
		slug: { type: String, required: true, unique: true },
		isUserPreferredSlug: { type: Boolean, default: false },
	},
	{
		versionKey: false,
		timestamps: true,
	},
);
module.exports = mongoose.model('ShortUrls', schema, 'ShortUrls');
