$(document).ready(function () {
  $(".navul>li>ul>li").hide();
  $(".navul>li").mouseover(function () {
    $(".navul>li>ul>li").stop().slideDown(300);
    $(this).find("p").css("color", "white"); // $(".navul > li p")
    $(this).find("p").css("background-color", "black");
  });
  $(".navul>li").mouseout(function () {
    $(".navul>li>ul>li").stop().slideUp(300);
    $(this).find("p").css("color", "#333");
    $(this).find("p").css("background-color", "");
  });

  $(".navul>li>ul>li").mouseover(function () {
    $(this).css("color", "white");
    $(this).css("background-color", "black");
  });
  $(".navul>li>ul>li").mouseout(function () {
    $(this).css("color", "#333");
    $(this).css("background-color", "");
  });
  // setInterval(function(){
  //   $('.slideWrap').animate({'margin-top':'-300'},function(){
  //       $('.slide:first').appendTo('.slideWrap')
  //       $('.slideWrap').css({'margin-top':'0'})
  //   })
  // },3000)

  let currentIndex = 0;
  setInterval(function () {
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    $(".slide").eq(currentIndex).siblings().fadeOut();
    $(".slide").eq(currentIndex).fadeIn();
  }, 2000);
});
