$(document).ready(function() {
    $('#contentSubmit').on('click', function() {
        var pageName = localStorage.getItem("headerName");
        var username = sessionStorage.username;
        var header = {
            name: localStorage.getItem("headerName"),
            data: localStorage.getItem("headerSubData"),
            dataType: localStorage.getItem("headerDataType"),
            pagePosition: localStorage.getItem("headerPagePosition")
        };
        var calendar = {
            //calendar
            name: localStorage.getItem("calendarName"),
            data: localStorage.getItem("calendarData"),
            dataType: localStorage.getItem("calendarDataType"),
            pagePosition: localStorage.getItem("calendarPagePosition")
        };
        var youTube = {
            //youtube
            name: localStorage.getItem("youTubeName"),
            data: localStorage.getItem("youTubeData"),
            dataType: localStorage.getItem("youTubeDataType"),
            pagePosition: localStorage.getItem("youTubePagePosition")
        };
        var text = {
            //text
            name: localStorage.getItem("textName"),
            data: localStorage.getItem("textData"),
            dataType: localStorage.getItem("textDataType"),
            pagePosition: localStorage.getItem("textPagePosition")
        };
        // console.log("text-name: " + content.text.name);

        $.ajax({
                url: '/addcontent',
                type: 'POST',
                dataType: 'text',
                data: {
                    pageName: pageName,
                    username: username,
                    header: header,
                    calendar: calendar,
                    youTube: youTube,
                    text: text
                }
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
});