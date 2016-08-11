// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('addContent controller loaded.');

    app.post('/addcontent', function(req, res) {
    	console.log('add content post hit');
    	console.log(req.body);
    	var userID;
    	var domain;
    	models.userID.findOne({ where: { username: req.body.username}})
		.then(function(res){
			console.log("Test Stuff =========== " + JSON.stringify(res, null, 2));
			userID = res.id;
			domain = res.domain;
		})
		.then(function(res) {
			console.log('userID: ' + userID);
			models.userPage.create({
				title: req.body.pageName,
				userID: userID,
				domain: domain,
				template: "student"
			})
		})
		// models.userContent.create({

		// })

		// models.userPage.create({

		// })

    	// models.userPage.create({
    	// 	title: req.body.pageName,

    	// })
   		// models.userContent.create({
   		// 	name: req.body.headerText,
   		// 	data: req.body.subheaderText
   		// })
    });
}
