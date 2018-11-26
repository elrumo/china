if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.parallax-h1').css('top', (scrollTop * -0.5) + 'px');
  });}else
{
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.parallax-h1').css('top', (scrollTop * -0.3) + 'px');
    $('.parallax-about-img').css('top', (scrollTop * -0.2 ) + 'px');
  });
}
