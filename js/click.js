$(document).on('click', '#btn_menu_toggle', function(e){
  $('#side_menu').addClass('open');
  e.stopPropagation();
});
$(document).on('click', function(e) {
  let sideMenu = $('#side_menu');
  
  // 메뉴가 열려있고, 클릭한 요소가 메뉴 영역이 아닐 때 메뉴 닫기
  if (sideMenu.hasClass('open') && !$(e.target).closest('#side_menu').length) {
    sideMenu.removeClass('open');
  }
});
$(document).on('click', '#close_menu', function(){
  $('#side_menu').removeClass('open');
  $('.submenu').removeClass('open');
  $('.has-submenu').removeClass('active');
});
$(document).on('click', '.has-submenu', function(e){
  e.preventDefault();
  if($(this).hasClass('active')){
    $('.has-submenu').removeClass('active');
    $('.submenu').removeClass('open');
  }else{
    $('.has-submenu').removeClass('active');
    $('.submenu').removeClass('open');
    $(this).next('.submenu').addClass('open');
    $(this).addClass('active');
  }
});
$(document).on('click', '#btn_up', function(e){
  e.preventDefault(); // 기본 동작 막기
  $('html, body').animate({ scrollTop: 0 }, 1000); // 3초 동안 맨 위로 이동
});
$(document).on('click', '#btn_down', function(e) {
  e.preventDefault(); // 기본 동작 막기
  $('html, body').animate({ scrollTop: $(document).height() }, 1000); // 1초 동안 맨 아래로 이동
});
$(document).on('click', '#btn_go_en', function() {
  let path = "https://eng.fki.or.kr/webzine/2412/";
  const currentPath = window.location.pathname.split('/').pop();

  if(currentPath == "" || currentPath === "sub_51.html" || currentPath === "sub_50.html"){
    path = path;
  }else{
    path = path + currentPath;
  }

  window.location.href = path;
});
$(document).on('click', '#btn_go_ko', function() {
  let path = "https://www.fki.or.kr/webzine/2412/";
  const currentPath = window.location.pathname.split('/').pop();

  if(currentPath == "" || currentPath === "sub_23.html" || currentPath === "sub_50.html" || currentPath === "sub_54.html" || currentPath === "sub_62.html" || currentPath === "sub_61.html"){
    path = path;
  }else{
    path = path + currentPath;
  }

  window.location.href = path;
});