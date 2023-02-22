$(function () {
  console.log("con02", $(".contents02").scrollTop());
  /* 모바일 햄버거 메뉴 버튼 이벤트 */
  $(".m_ham_menu").click(function () {
    $(this).toggleClass("active");
    $("#lnb").toggleClass("openLnb");
  });

  $(window).scroll(function () {
    // header scroll 시 컬러/ stiky 이벤트
    let target = 0;
    let st = $(this).scrollTop();
    if (st > target) {
      $(".header").addClass("scrolling");
    } else {
      $(".header").removeClass("scrolling");
    }

    // 반응형 content02  fade in out 이벤트
    if ($(this).scrollTop() >= $(".contents01").offset().top) {
      $(".con02_left > div").css({ opacity: "1" });
    }
  });
});
