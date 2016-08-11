$(document).ready(function() {
	$('#contentSubmit').on('click', function(){
		var headerText = localStorage.getItem("headerName"); 
		var subheaderText = localStorage.getItem("headerSubData");
		console.log(headerText);
		console.log(subheaderText);
		$.ajax({
			url: '/',
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