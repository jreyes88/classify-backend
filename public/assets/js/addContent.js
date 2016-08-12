$(document).ready(function() {
    $('#contentSubmit').on('click', function() {
        var data = {
                "pageName": localStorage.getItem("headerName"),
                "username": sessionStorage.username,
                "content": [{
                    //header
                    "name": localStorage.getItem("headerName"),
                    "data": localStorage.getItem("headerSubData"),
                    "dataType": localStorage.getItem("headerDataType"),
                    "pagePosition": localStorage.getItem("headerPagePosition")
                }, {
                    //calendar
                    "name": localStorage.getItem("calendarName"),
                    "data": localStorage.getItem("calendarData"),
                    "dataType": localStorage.getItem("calendarDataType"),
                    "pagePosition": localStorage.getItem("calendarPagePosition")
                }, {
                    //youtube
                    "name": localStorage.getItem("youTubeName"),
                    "data": localStorage.getItem("youTubeData"),
                    "dataType": localStorage.getItem("youTubeDataType"),
                    "pagePosition": localStorage.getItem("youTubePagePosition")
                }, {
                    //text
                    "name": localStorage.getItem("textName"),
                    "data": localStorage.getItem("textData"),
                    "dataType": localStorage.getItem("textDataType"),
                    "pagePosition": localStorage.getItem("textPagePosition")
                }]
            }

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