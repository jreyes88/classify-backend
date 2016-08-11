module.exports = function(app, models) {
	app.get('/:username', function(req, res) {
		var activeUser;
		models.userID.findOne({ where: { username: req.params}})
		.then(function(res){
			activeUser = res;
			console.log("Test Stuff ===========" + (res));
		})
		models.userContent.create({

		})

		models.userPage.create({

		})
	});
};