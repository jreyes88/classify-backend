var 	express							=	require('express'),
		models							=	require('../models'),
		Router							=	express.Router(),
		loginController					=	require('./login-controller.js'),
		contentController 				=	require('./addContent-controller.js'),
		userGeneratedPageController 	=	require('./userGeneratedPage-controller.js'),
		userIDController 				=	require('./userID-controller.js'),
		userPageController 				=	require('./userPage-controller.js'),
		userContentController 			=	require('./userContent-controller.js');


loginController(router, models);
contentController(router, models);
adminController(router, models);
userGeneratedPageController(router, models);

router.get('/', function(req, res)
	{
		res.render('index');
	}
);

console.log('Main router loaded.');
module.exports = router;