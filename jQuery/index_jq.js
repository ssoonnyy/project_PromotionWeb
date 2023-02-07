$(document).ready(function(){


  /* 모바일 햄버거 메뉴 버튼 이벤트 */
  $('.m_ham_menu').click(function(){
    $(this).toggleClass('active');
    $('#lnb').toggleClass('openLnb')
  });

});

