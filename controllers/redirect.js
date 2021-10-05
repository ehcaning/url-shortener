function redirect(req, res, next) {
	try {
		res.redirect('http://ehcan.ir');
	} catch (err) {
		next(err);
	}
}

module.exports = {
	redirect,
};
