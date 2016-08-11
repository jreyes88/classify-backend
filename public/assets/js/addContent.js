$(document).ready(function() {
	$('#contentSubmit').on('click', function(){
		var data = {
			"pageName": localStorage.getItem("headerName"),
			"username": sessionStorage.username,
			"content": [
				{
					"headerTitle": localStorage.getItem("headerName"),
					"headersubTitle": localStorage.getItem("headerSubData")
				},
				{
					"textTitle": localStorage.getItem("headerName"),
					"textContent": localStorage.getItem("textData")
				}
			]
		}
		// var subheaderText = localStorage.getItem("headerSubData");
		$.ajax({
			url: '/addcontent',
			type: 'POST',
			dataType: 'JSON',
			data: data
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