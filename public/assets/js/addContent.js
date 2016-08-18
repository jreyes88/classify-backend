$(document).ready(function() {
    $('#contentSubmit').on('click', function() {
            var pageName = localStorage.getItem("headerName");
            var username = sessionStorage.username;

        // console.log("text-name: " + content.text.name);

        $.ajax({
            url: '/addcontent',
            type: 'POST',
            dataType: 'text',
            data: {
                pageName: pageName,
                username: username,
                headerName: localStorage.getItem("headerName"),
                headerData: localStorage.getItem("headerSubData"),
                headerDataType: localStorage.getItem("headerDataType"),
                headerPagePosition: localStorage.getItem("headerPagePosition"),
                calendarName: localStorage.getItem("calendarName"),
                calendarData: localStorage.getItem("calendarData"),
                calendarDataType: localStorage.getItem("calendarDataType"),
                calendarPagePosition: localStorage.getItem("calendarPagePosition"),
                youTubeName: localStorage.getItem("youTubeName"),
                youTubeData: localStorage.getItem("youTubeData"),
                youTubeDataType: localStorage.getItem("youTubeDataType"),
                youTubePagePosition: localStorage.getItem("youTubePagePosition"),
                textName: localStorage.getItem("textName"),
                textData: localStorage.getItem("textData"),
                textDataType: localStorage.getItem("textDataType"),
                textPagePosition: localStorage.getItem("textPagePosition")
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
