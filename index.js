AOS.init();
$(document).ready(function(){
  const cross= document.querySelector('.cross');
  $('.admin').click(function(){
    $('.adminform').css("display","block");
    $('.adminform').css("animation","fades 1s ease-in-out");
    $(".cross").hide();
  });
  // sdchjabsjchac
  $('.close').click(function(){
    $(".cross").show();
    if ($(window).width() >450) { 
      $(".cross").hide();
    }
    $('.adminform').css("display","none");
  });
  cross.addEventListener('click',e=>{
          $(".lists").slideToggle();
          $(".slogans").toggle();
          $(".sign").toggle();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayHoverPause:true,
    items:4,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
});