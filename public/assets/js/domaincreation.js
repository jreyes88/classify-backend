$(document).ready(function() {
    $('#domainSubmit').on('click', function(e) {
        console.log("click event!");
        e.preventDefault();
        var domain = $('.domainInput').val();
        console.log(domain);
        $.ajax({
                url: '/domainSubmit',
                type: 'POST',
                dataType: 'JSON',
                data: { domain }
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
    });
})