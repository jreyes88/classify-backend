module.exports = function(app, models)
	{
    	console.log('admin controller loaded.');
    	app.post('/addcontent', function(req, res)
    		{
        		console.log("This " + req);
    		}
    	);
	};