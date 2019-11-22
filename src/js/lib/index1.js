define(['jquery'], function($) {
    return {
        render: function() {
            $("img.lazy").lazyload({
                effect: "fadeIn",
                placeholder: "../images/timg.jpg",
                failurelimit: 10
            });
            $.ajax({
                type: "get",
                url: "../lib/getall.php",
                dataType: "json",
                success: function(data) {
                    // console.log(data)
                    let temp = '';
                    data.forEach((elm, i) => {
                        let pic = JSON.parse(elm.pic);
                        temp += `
                                    <li>
                                        <a href="product.html?id=${elm.id}" style="color:#333;text-decoration:none">
                                        <div><img src="${pic[0].p1}" alt="#" class="lazy"></div><br>
                                        <img src="${pic[0].p2}" alt="#" class="li-logo"><br>
                                        <span>${elm.title}</span><br>
                                        <b>￥${elm.price}</b></a>
                                    </li>
                                `;
                    });
                    $('.insert1').append(temp);
                }
            });
        },
        head: function() {
            $(window).on('scroll', function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > 259) {
                    $('.ding').addClass('fixed')
                    $('.nav-logo').removeAttr('style')
                } else {
                    $('.ding').removeClass('fixed')
                    $('.nav-logo').attr('style', 'display:none')
                }
            })
        },
        slider: function() {
            $('#slider').slider()
        }
    }
})