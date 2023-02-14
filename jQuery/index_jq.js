$(function(){
  /* 모바일 햄버거 메뉴 버튼 이벤트 */
  $('.m_ham_menu').click(function(){
    $(this).toggleClass('active');
    $('#lnb').toggleClass('openLnb')
  });



  $(window).scroll(function(){

    // header scroll 시 컬러/ stiky 이벤트
    let target = 0;
    let st = $(this).scrollTop();
    if(st > target){
      $('.header').addClass('scrolling');
    }else {
      $('.header').removeClass('scrolling');
    }
    console.log('st', st)
  

   

    // 반응형 content02  fade in out 이벤트
    if(window.innerWidth >= 1920){
      if($('html').scrollTop() >= 800){
        $('.con02_left > div').fadeIn(2000);
      }else{  
        $('.con02_left > div').fadeOut();
      }
    } else if(window.innerWidth >= 1024 && window.innerWidth < 1440){
      if($('html').scrollTop() >= 600){
        $('.con02_left > div').fadeIn(2000);
      }else{  
        $('.con02_left > div').fadeOut();
      }
    }else if(window.innerWidth >= 801 && window.innerWidth < 1023){
      if($('html').scrollTop() >= 300){
        $('.con02_left > div').fadeIn(2000);
      }else{  
        $('.con02_left > div').fadeOut();
      }
    }
  });
});


