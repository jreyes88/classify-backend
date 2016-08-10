module.exports = function(app, models) {
	console.log('domain controller loaded.');
	app.post('/domainSubmit', function(req, res) {
		models.userDomain.create({
			domainName: req.body.domain
		})
		console.log("listening for domain submission")
	})
	// ADD :USER
	// app.get('/admin', function(req, res){
	// 		// var hbsObject = {}
	// 		// console.log(hbsObject);
	// 		res.render('admin');
	// 	});
}