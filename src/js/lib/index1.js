// // $(function() {
// //选项卡+放大镜效果
// (function() {
//     var ulobj = $(".imglist ul");
//     var picimg = $(".imgpart .pic img");
//     var objimg = $(".imgpart .bigpic img");
//     ulobj.on("mouseenter", "li", function() {
//         var imgsrc = $(this).children("img").attr("src");
//         $(this).addClass("active").siblings().removeClass("active");
//         picimg.attr("src", imgsrc);
//         objimg.attr("src", imgsrc)
//     });
//     var pic = $(".imgpart .pic");
//     var magnify = $(".imgpart .pic .magnify");
//     var bigpic = $(".imgpart .bigpic");
//     var objimg = $(".imgpart .bigpic img");
//     pic.mousemove(function(e) {
//         magnify.show();
//         bigpic.show();
//         var pagex = e.pageX;
//         var pagey = e.pageY;
//         var pictop = pic.offset().top;
//         var picleft = pic.offset().left;
//         var magnifyw = magnify.width();
//         var magnifyh = magnify.height();
//         var magnifytop = pagey - pictop - magnifyh / 2;
//         var magnifyleft = pagex - picleft - magnifyw / 2;
//         var picw = pic.width() - magnifyw;
//         var pich = pic.height() - magnifyh;
//         magnifytop = magnifytop < 0 ? 0 : magnifytop;
//         magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
//         magnifytop = magnifytop > pich ? pich : magnifytop;
//         magnifyleft = magnifyleft > picw ? picw : magnifyleft;
//         magnify.css({ top: magnifytop, left: magnifyleft });
//         var minl = bigpic.width() - objimg.width();
//         var mint = bigpic.height() - objimg.height();
//         var objimgl = -magnifyleft * 2;
//         var objimgt = -magnifytop * 2;
//         objimgl = objimgl < minl ? minl : objimgl;
//         objimgt = objimgt < mint ? mint : objimgt;
//         objimg.css({ top: objimgt, left: objimgl })
//     });
//     pic.mouseleave(function() {
//         magnify.hide();
//         bigpic.hide()
//     })

// })()
// // });

define(['jquery'], function($) {
    return {
        render: function() {
            $("img.lazy").lazyload({
                effect: "fadeIn",
                placeholder: "../images/timg.jpg",
                failurelimit: 10


            }, 2000);
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
                                        <img src="${pic[0].p2}" alt="#" class="li-logo lazy"><br>
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