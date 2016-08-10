$(document).ready(function() {
    $('#domainSubmit').on('click', function() {
        var domainName = $('#domainInput').val();
        $.ajax({
                url: '/domainSubmit',
                type: 'POST',
                dataType: 'JSON',
                data: { domainName }
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