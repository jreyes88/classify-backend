// any route that requires a login authentication
module.exports = function(app, models) {
    console.log('addContent controller loaded.');
        
    app.post('/addcontent', function(req, res) {
    	console.log(req.body.headerText);
    	console.log(req.body.subheaderText);
   		models.userContent.create({
   			name: req.body.headerText,
   			data: req.body.subheaderText
   		})
    });
}
