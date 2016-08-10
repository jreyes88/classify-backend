$(document).ready(function() {
	$('#headerSubmit').on('click', function(){
		var headerText = $(".headerText").val();
		var subheaderText = $(".subheaderText").val();
		$.ajax({
			url: '/addcontent',
			type: 'POST',
			dataType: 'JSON',
			data: {headerText, subheaderText}
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
	})
})