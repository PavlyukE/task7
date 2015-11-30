$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("smaller");
  }
  else{
    $('header').removeClass("smaller");
  }
});