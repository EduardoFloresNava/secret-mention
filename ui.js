$(function(){
  var max_count = 140;
  $('textarea').on('keyup', function() {
    count = $(this).val().length;
    $('span.count').text(max_count - count);
  });
  
  $('form').on('submit', function(e) {
    e.preventDefault();
    $('.sobre').addClass('up')
    setTimeout(function() {
      $('.form').addClass('up');
      setTimeout(function(){
        $('.sobre .front').text('Mensaje Enviado');
      }, 1000)
    }, 1000);
  })
  
});