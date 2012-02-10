$(function(){
  
  $('form').on('submit', function(e) {
    e.preventDefault();
    $('.sobre').addClass('up')
    setTimeout(function() {
      $('.form').addClass('up');
      setTimeout(function(){
        $('.sobre .front').text('Mensaje Enviado');
      }, 1000)
    }, 800);
  })
  
});