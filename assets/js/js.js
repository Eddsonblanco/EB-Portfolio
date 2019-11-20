$(window).on('scroll', function (){
    if($(window).scrollTop()){
        $('#nav').addClass('black');
        $('#logo').attr("src",'./assets/img/logo EB .png');
        $('#lastName').addClass('active')
    }
    else
    {
        $('#logo').attr("src",'./assets/img/logo.png');
        $('#nav').removeClass('black');
        $('#lastName').removeClass('active')
        
    }
})


$(document).ready(function(){
    $('.parallax').parallax();
  });