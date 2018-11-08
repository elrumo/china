if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
}else
{
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.parallax-h1').css('top', (scrollTop * -0.3) + 'px');

    // $('.about-img').css('top', (scrollTop * -0.13 ) + 'px');
    $('.parallax-about-img').css('top', (scrollTop * -0.2 ) + 'px');

    // $('#column2').css('top', (scrollTop * -0.1) + 'px');
    // $('#column3').css('top', (scrollTop * -0.05) + 'px');

  /*
    $('#gallery1').css('top', (scrollTop * -0.02) + 'px');
    $('#gallery2').css('top', (scrollTop * 0.03) + 'px');
    $('#gallery3').css('top', (scrollTop * 0.01) + 'px');
    $('#gallery5').css('top', (scrollTop * 0.03) + 'px');
    $('#gallery6').css('top', (scrollTop * -0.04) + 'px');
    $('#column2').css('top', (scrollTop * -0.1) + 'px');
    $('#column3').css('top', (scrollTop * 0.1) + 'px');
    */
  });
}


// TODO: fix hero image when scroling and slowly reduce opacity
