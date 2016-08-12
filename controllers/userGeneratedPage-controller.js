module.exports = function(app, models)
	{
		app.get('/:username/:title', function(req, res)
			{
				var paramsUser = req.params.username;
				var paramsTitle = req.params.title;
				console.log(req.params);
			});
	};