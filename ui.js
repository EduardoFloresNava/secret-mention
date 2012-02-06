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
    }, 1000);
  })
  
});