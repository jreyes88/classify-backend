$(document).ready(function() {
	$('#signUpSubmit').on('click', function(){
		var body = {
			userName: $('.newUsernameText').val(),
			password: $('.newPw').val()
		}
		console.log(body);
	})
})
