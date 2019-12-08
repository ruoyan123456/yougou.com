define(['jquery'], function() {

    return {
        render: function() {
            $('#submit').on('click', function() {
                // console.log(1)
                $.ajax({
                    type: "post",
                    url: "../lib/login.php",
                    data: {
                        username: $('.user_text').val(),
                        psw: $.md5($('.mima_text').val())
                    },
                    dataType: "json",
                    success: function(response) {
                        if (response.mm == 1) {
                            // alert(response.msg)
                            location.href = "../html/home.html"
                        } else if (response.mm == 2) {
                            alert(response.msg)
                            location.reload();
                        }
                    }
                });
            })

        }
    }
})