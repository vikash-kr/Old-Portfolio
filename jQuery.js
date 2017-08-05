jQuery(function () {
    var $div = $('.btn-1');
    setInterval(function () {
        $div.toggleClass('btn-1 btn-2');
    }, 1000);
})