$(function(){
  $("#night").click(function() {
    $("body").removeClass();
    $("body").addClass("darkness")
  });
});

$(function(){
  $("#light").click(function(){
    $("body").removeClass();
    $("body").addClass("lightness")
  });
});
