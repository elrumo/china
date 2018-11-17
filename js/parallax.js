if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
}else
{
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.parallax-h1').css('top', (scrollTop * -0.8) + 'px');
    $('.parallax-about-img').css('top', (scrollTop * -0.2 ) + 'px');
  });
}
