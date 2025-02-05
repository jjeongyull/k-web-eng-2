$(function(){
  $('#header').load('component/header.html');
  $('#footer').load('component/footer.html');
  $('#floating').load('component/floating.html');

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('header').addClass('active'); // 스크롤이 시작되면 고정
    } else {
      $('header').removeClass('active'); // 스크롤이 맨 위로 가면 해제
    }
  });
});



