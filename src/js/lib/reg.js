define(['jquery'], function($) {
    return {
        render: function() {

            var reg2 = /^.{6,16}$/
            var reg4 = /^1[356789]\d{9}$/

            $('#userName')[0].onkeyup = function() {
                if (reg4.test(this.value)) {

                    $('.phonetext').html('手机号可用').css('color', 'green');

                } else {
                    $('.phonetext').html('请输入正确的手机号').css('color', 'red');
                }
            }
            $('#password')[0].onkeyup = function() {
                if (reg2.test(this.value)) {
                    $('.pwdtext').html('密码可用').css('color', 'green')
                } else {
                    $('.pwdtext').html('密码格式有误').css('color', 'red');
                }
            }
            $('.true')[0].onkeyup = function() {
                if (this.value == $('#password').val()) {
                    $('.pwdtext1').html('密码正确').css('color', 'green')
                } else {
                    $('.pwdtext1').html('密码不一致').css('color', 'red');
                }
            }

            $('#submit').on('click', function() {
                console.log(1)
                $.ajax({
                    type: "post",
                    url: "../lib/reg.php",
                    data: {
                        username: $('#userName').val(),
                        psw: $.md5($('#password').val())
                    },
                    success: function(response) {
                        console.log(response)
                        if (response == 1) {
                            alert('用户名已存在');
                            location.reload();
                        } else if (response == 2) {
                            alert('注册成功')
                            location.href = "../html/login.html";
                        }
                    }
                });
            })

        }

    }
})