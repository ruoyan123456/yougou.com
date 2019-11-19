(function($) {
    $.fn.extend({
        slider: function(options) {
            var main = null, //主函数
                that = this, //保存执行上下文对象
                init = null, //初始化
                stop = null, //停止
                start = null, //开始
                next = null, //下一张
                prev = null, //上一张
                timer = null, //计时器
                elms = {}, //存储元素  命名空间
                defaults = {
                    speed: 600, //动画时间
                    delay: 3000 //展示时间
                }; //默认参数

            defaults = $.extend(defaults, options); //合并参数

            // 1. 初始化
            init = function() {
                // 将元素选择 放在这个函数中
                elms._index = 1; //初始化 播放张数
                elms.sliderDiv = that.children('div'); // 获取要进行动画的DIV元素
                elms.btn = that.children('span'); //获取左右按钮
                elms.sliderDiv.append(elms.sliderDiv.children('img').first().clone()); //克隆第一张图片

                // 点击事件绑定
                elms.btn.on('click', function() {
                    if (elms.btn.index(this)) {
                        next();
                    } else {
                        prev();
                    }
                });

                that.hover(function() {
                    stop();
                }, function() {
                    timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
                });
                //5.鼠标点击动画
                that.children('ul').children('li').click(function() {

                    elms._index = that.children('ul').children('li').index(this) + 1;
                    $(that.children('ul').children('li').get(elms._index - 1)).attr('style', 'background:#9b2e2e').siblings().removeAttr('style');

                    that.children('div').animate({
                        left: -(elms._index - 1) * 1920 + 'px'
                    }, defaults.speed)
                });
            }

            // 2. 开始动画
            start = function(fx) {
                var left = "-=1920px";

                if (!fx) {
                    left = "+=1920px";
                    if (elms._index <= 1) {
                        elms._index = 4;

                        var divLeft = that.offset().left,
                            imgLeft = elms.sliderDiv.children('img').last().offset().left;
                        elms.sliderDiv.css('left', '-' + (imgLeft - divLeft) + 'px');
                    }
                }


                elms.sliderDiv.animate({
                    left: left
                }, defaults.speed, function() {
                    if (fx) elms._index++;
                    else elms._index--;

                    if (elms._index === 4) {
                        elms._index = 1;
                        elms.sliderDiv.css('left', 0);
                    }
                    $(that.children('ul').children('li').get(elms._index - 1)).attr('style', 'background:#9b2e2e').siblings().removeAttr('style');

                });

            }

            // 3. 方向控制
            next = function() {
                stop();
                start(1);
            }

            prev = function() {
                stop();
                start(0);
            }

            // 4. 停止动画
            stop = function() {
                elms.sliderDiv.stop(true, true);
                clearInterval(timer);
            }


            // clid = function() {

            //     elms._index = that.children('ul').children('li').index(this) + 1;
            //     console.log(that.children('ul').children('li').index())
            //     that.css('left', -(elms._index - 1) * 570 + 'px');
            // }

            main = function() {
                init();
                timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
            }

            main();

        }
    });
})(jQuery);