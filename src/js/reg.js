window.onload = function() {
    var userName = document.querySelector('#phone_number'); //用户名
    var userPassword = document.querySelector('#u_password'); //密码
    var userTel = document.querySelector('#yanzhengma-img'); //电话号码
    var btn = document.querySelector('#submit');
    $('#submit').on('click', function() {
        var pass = $.md5($('#userPassword').val());
        // console.log(pass);
        $.ajax({
            type: "POST",
            url: "../lib/register.php",
            data: {
                'userName': $('#userName').val(),
                'userPassword': pass,
                'userTel': $('#userTel').val()
            },
            success: function(response) {
                eval(response);
            }
        });
    })


}