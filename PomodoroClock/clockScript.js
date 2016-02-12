$(document).ready(function() {
  
  var sessionLength = 25;
  var breakLength = 5;
  
  var seconds = 0;
  var minutes = 25;
  var counter;
  
  $('#timer').html(minutes + ":00");
  
  $('#minusBl').click(function() {
      breakLength--;               
      $('#bl').html(breakLength);
  });

  $('#plusBl').click(function () {
      breakLength++;
      $('#bl').html(breakLength);
  });

  $('#minusSl').click(function () {
      sessionLength--;
      $('#sl').html(sessionLength);
  });

  $('#plusSl').click(function () {
      sessionLength++;
      $('#sl').html(sessionLength);
  });

});