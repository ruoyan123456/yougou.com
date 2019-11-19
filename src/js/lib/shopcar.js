define(['jquery', 'cookie'], function($) {
    return {
        render: function() {
            var shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                var idList = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: "../lib/shop.php",
                    data: {
                        'idList': idList
                    },
                    dataType: "json",
                    success: function(data) {
                        var tempstr = '';
                        data.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            let name = elm.name;
                            var price = JSON.parse(elm.price);
                            var arr = shop.filter((val, i) => {
                                return val.id == elm.id;
                            });
                            // console.log(arr);
                            // console.log(pic[0].p1)
                            // console.log(name)
                            tempstr += `
                            <tr width="998" height="100" style="border: 1px solid red;">
                            <th> 
                                    <input class="none" type="checkbox" id="CNYcheckStartAll" name="CNYcheckAll">
                                <span width="72" height="72">
                                        <img src=${pic[0].p1} alt="" width="60" height="60">
                                    </span></th>
                            <th>
                                <a href="#">${name}</a>
                            </th>
                            <th>
                                颜色：黑色 <br>尺码：37
                            </th>
                            <th>${price}</th>
                            <th>${arr[0].num}</th>
                            <th><span class='count'>${(arr[0].num*elm.price).toFixed(2)}</span><br> 移入收藏夹
                                <br> <span class="del" data-id=${shop.index}>删除</span>
                                <br></th>
                            <th></th>
                        </tr>`;
                        });
                        $('tbody').append(tempstr);
                        //全选
                        $('.selectall').on('click', function() {
                            $('input:not(.selectall)').prop('checked', $(this).prop('checked'));
                            count()
                        })
                        $('input:not(.selectall)').on('click', function() {
                            count()
                        })

                        //清除
                        $('.clearbag').on('click', function() {
                            cookie.remove('shop');
                            location.reload()
                        })

                        //删除
                        $('.del').on('click', function() {
                            var i = $('.del').index($(this));
                            // console.log(shop[i])
                            var arr = [];
                            shop.forEach(elm => {
                                    if (shop[i].id != elm.id) {
                                        arr.push(elm)
                                    }
                                })
                                // cookie.remove('shop');
                            cookie.set('shop', JSON.stringify(arr), 1)
                            location.reload()
                        })
                    }
                });
            }

            function count() {
                var sum = 0;
                $('.price').html(null)

                $('.shopcar').find('input:checked').parents('tr').find('.count').text(function(i, val) {
                    sum += parseInt(val);
                })
                $('.price').append(sum)
            }
        }
    }
})