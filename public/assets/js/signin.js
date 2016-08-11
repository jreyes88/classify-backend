// $(document).ready(function() {
//     $('#signUpSubmit').on('click', function() {
//         var name = $('#signup-nameText').val();
//         console.log("name: " + name);
//         var username = $('#signup-usernameText').val();
//         console.log("username: " + username);
//         var domain = $('#signup-domainText').val();
//         console.log("domain: " + domain);
//         var email = $('#signup-emailText').val();
//         console.log("email: " + email);
//         var password = $('#signup-pw').val();
//         console.log("password: " + password);
//         $.ajax({
//                 url: '/signup',
//                 type: 'POST',
//                 dataType: 'JSON',
//                 data: { name, username, domain, email, password }
//             })
//             .done(function(res) {
//                 console.log(res.done + " " + res.status);
//             })
//             .fail(function() {
//                 console.log("error");
//             })
//             .always(function() {
//                 console.log("complete");
//             });
//     });

 //    $('#loginSubmit').on('click', function() {
 //        var userName = $('.usernameText').val();
 //        var password = $('.pw').val();
 //        $.ajax({
 //                url: '/signin',
 //                type: 'POST',
 //                dataType: 'JSON',
 //                data: { userName, password }
 //                // success: function(data, textStatus, jqXHR) {
 //                //     console.log(data);
 //                //     // if (typeof data.redirect == 'string') {
 //                //     //     window.location.replace(window.location.protocol + "//" + window.location.host + data.redirect);
 //                //     }
 //            })
 //            .done(function(res) {
 //                console.log(res.done + " with status " + res.status);
 //            })
	// });
// })
