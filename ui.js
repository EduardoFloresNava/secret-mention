$(function(){
  var max_count = 140;
  $('textarea').on('keyup', function() {
    count = $(this).val().length;
    $('span.count').text(max_count - count);
  });
  
  h = $(window).height();
});