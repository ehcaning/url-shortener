const mongoose = require('mongoose');

const schema = mongoose.Schema(
	{
		slug: { type: String, required: true },
		ip: { type: String },
	},
	{
		versionKey: false,
		timestamps: true,
	},
);
module.exports = mongoose.model('VisitLog', schema, 'VisitLog');
