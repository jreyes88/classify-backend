$(document).ready(function() {
	$('#signUpSubmit').on('click', function(){
		var body = {
			userName: $('.newUsernameText').val(),
			password: $('.newPw').val()
		}
		$.ajax({
			url: '/signup',
			type: 'POST',
			dataType: 'JSON',
			data: {body},
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
