$(document).ready(function() {
	$('#headerSubmit').on('click', function(){
		var headerText = $(".headerText").val();
		$.ajax({
			url: '/addcontent',
			type: 'POST',
			dataType: 'JSON',
			data: {headerText},
		})
		.done(function(res) {
			console.log(res.done + " " + res.status);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	$('')	

	})
})