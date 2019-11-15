$(function() {
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
    $()
})