console.log("Connected!");

$(document).ready(function(){

  $('button').click(function(){
    $('img').removeClass().addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass();
    })
  })


})
