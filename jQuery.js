//for toggle
jQuery(function () {
    var $div = $('.btn-1');
    setInterval(function () {
        $div.toggleClass('btn-1 btn-2');
    }, 1000);
})
// Make scroll smooth
$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});
