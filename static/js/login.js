$(document).ready(function() {
	$('#signUpSubmit').on('click', function(){
		var userName = $('.newUsernameText').val();
		var password =  $('.newPw').val();
		console.log(userName + "  " + password);
		$.ajax({
			url: '/signup',
			type: 'POST',
			dataType: 'JSON',
			data: {userName, password},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	})
})
