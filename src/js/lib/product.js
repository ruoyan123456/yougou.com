define(['jquery', 'cookie'], function($) {
    return {
        render: function() {
            let id = location.search.split('=')[1];
            $.ajax({
                type: "GET",
                url: "../lib/getitem.php",
                data: {
                    id: id
                },
                dataType: "json",
                success: function(data) {
                    let price = JSON.parse(data.price)
                    let pic = JSON.parse(data.pic)
                    let name = data.name

                    // console.log(data)
                    let temp = ` 
                            <div class="imgdet wrap">
                                <div class="imglist">
                                    <ul>
                                        <li class="">
                                            <img src=${pic[0].p3} alt="">
                                        </li>
                                        <li class="">
                                            <img src=${pic[0].p4} alt="">
                                        </li>
                                        <li class="">
                                            <img src=${pic[0].p5} alt="">
                                        </li>
                                        <li class="">
                                            <img src=${pic[0].p6} alt="">
                                        </li>
                                        <li class="active">
                                            <img src=${pic[0].p7} alt="">
                                        </li>
                                        <li class="">
                                            <img src=${pic[0].p6} alt="">
                                        </li>
                                    </ul>
                                </div>
                                <div class="imgpart">
                                    <div class="pic">
                                        <img src=${pic[0].p7} alt="">

                                        <div class="magnify" style="display: none; top: 138px; left: 260px;"></div>
                                    </div>

                                    <div class="bigpic">
                                        <img src=${pic[0].p7} alt="" style="top: -276px; left: -460px;">
                                    </div>
                                </div>
                            </div>
                            <div class="shopping-container">
                                <div class="brand-logo">
                                    <a href="#">
                                        <img src=${pic[0].p2} width="112" height="52">
                                    </a>
                                </div>
                                <h1 style='font-size:16px; padding-top:20px'>${name}</h1>
                                <div class="price clearfix">
                                    <h3 id="yitianPrice" class="now symbol" style='font-size:30px; padding-top:40px'>¥<b>${price}</b></h3>
                                </div>
                    <hr>
                                <div class="buy">
                                    <div class="color">
                                        <span class="fl" style="display: inline;">颜色：</span>
                                        <span class="fl prodSpec" style="display: inline;margin-left: 2px;width: 400px;">
                                            <img width="40" height="40" src=${pic[0].p3} alt="黑单里">
                                            </span>
                                    </div>
                                    <p data-property="尺码" class="prosize">
                                                    <span class="title">尺码：</span> 
                                                    <span class="fl prodSpec size"> 
                                                                <a data-value="size_s330" data-name="33" class="no">33<i></i></a>
                                                                <a data-value="size_s340" data-name="34">34<i></i></a>
                                                                <a data-value="size_s350" data-name="35" class="select">35<i></i></a>
                                                                <a data-value="size_s360" data-name="36">36<i></i></a>
                                                                <a data-value="size_s370" data-name="37" class="no">37<i></i></a>
                                                                <a data-value="size_s380" data-name="38">38<i></i></a>
                                                                <a data-value="size_s390" data-name="39">39<i></i></a>
                                                                <a data-value="size_s400" data-name="40">40<i></i></a>
                                                    </span> 
                                                    <span class="size_contrast view-table"><a href="javascript:;" id="compare_size_link"><i class="icon"></i>查看尺码表&gt;&gt;</a></span>
                                                </p>
                                    <br>
                                    <div class="count clearfixed" >
                                        <span class="title">数量：</span>
                                        <div class="input-content">
                                            <input type="number" value="1" id="number" min="1" maxlength="10">
                                        </div>
                                        <div class="buttons">
                                            <a href="javascript:;" id="bot_plus" class="plus">
                                                <icon class="icon up"></icon>
                                            </a>
                                            <a href="javascript:;" id="bot_subtract" class="subtract">
                                                <icon class="icon down"></icon>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="qbuy add-cart">
                                            <span class='add' width="222" height="46" style="line-height: 46px;color:#fff;font-size: 20px; background-color:#333;display:inline-block;padding:0 20px;margin-top:10px">加入购物袋</span>
                                            <span class='buy' width="222" height="46" style="border: 1px solid #333;line-height: 46px;color:#333;font-size: 20px; background-color:#fff;display:inline-block;padding:0 20px;margin-top:10px"><a href="./shopcar.html">立即购买</a></span>
                                    </div>
                                </div>
                                <div id="guessUlike" class="soldoutdiv guess_like">
                                    <ul style="list-style: none;"></ul>
                                </div>
                                <div class="share">
                                    <div class="share_goods_new">
                                        <span id="favoriteImg" class="good_sc goodsClear">
                                                <a href="javascript:void(0)">
                                                <i class="icon"></i>收藏</a>
                                            </span>
                                    
                                            <i class="share"></i>
                                            <a href="javascript:void(0)" class="bds_more" data-cmd="more">分享</a>
                                    </div>
                                </div>
                            </div>`;
                    $('.pro-detail').append(temp).find('.add').on('click', function() {
                        alert('加购成功')

                        addItem(data.id, data.price, $('#number').val());
                    })
                    let ulobj = $(".imglist>ul");



                    let picimg = $(".imgpart>.pic>img");

                    let objimg = $(".imgpart>.bigpic>img");

                    ulobj.on("mouseenter", "li", function() {
                        let imgsrc = $(this).children().attr("src");
                        $(this).addClass("active").siblings().removeClass("active");
                        picimg.attr("src", imgsrc);
                        objimg.attr("src", imgsrc)
                    });
                    let magnify = $(".imgpart>.pic>.magnify");

                    let bigpic = $(".imgpart>.bigpic");

                    let objimg11 = $(".imgpart>.bigpic>img");
                    let pic11 = $(".imgpart>.pic");

                    pic11.on('mouseover', function(e) {

                        magnify.show();
                        bigpic.show();

                        let pagex = e.pageX;
                        let pagey = e.pageY;
                        let pictop = pic11.offset().top;
                        let picleft = pic11.offset().left;
                        let magnifyw = magnify.width();
                        let magnifyh = magnify.height();
                        let magnifytop = pagey - pictop - magnifyh / 2;
                        let magnifyleft = pagex - picleft - magnifyw / 2;
                        let picw = pic11.width() - magnifyw;
                        let pich = pic11.height() - magnifyh;
                        magnifytop = magnifytop < 0 ? 0 : magnifytop;
                        magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
                        magnifytop = magnifytop > pich ? pich : magnifytop;
                        magnifyleft = magnifyleft > picw ? picw : magnifyleft;
                        magnify.css({ top: magnifytop, left: magnifyleft });
                        let minl = bigpic.width() - objimg11.width();
                        let mint = bigpic.height() - objimg11.height();
                        let objimg11l = -magnifyleft * 2;
                        let objimg11t = -magnifytop * 2;
                        objimg11l = objimg11l < minl ? minl : objimg11l;
                        objimg11t = objimg11t < mint ? mint : objimg11t;
                        objimg11.css({ top: objimg11t, left: objimg11l })
                    })
                    pic11.on('mouseout', function() {
                        magnify.hide();
                        bigpic.hide()
                    })
                }
            })

            function addItem(id, price, num) {
                var shop = cookie.get('shop'); //获取cookie

                var product = {
                    id: id,
                    price: price,
                    num: num
                };

                if (shop) {
                    shop = JSON.parse(shop);
                    if (shop.some(elm => elm.id == id)) {
                        shop.forEach(elm => {
                            elm.id == id ? elm.num = num : null;
                        });
                    } else {
                        shop.push(product);
                    }
                } else {
                    shop = [];
                    shop.push(product);
                    // console.log(product);
                }
                cookie.set('shop', JSON.stringify(shop), 1);
            }
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

    }
})