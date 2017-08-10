$(document).ready(function() {
   $("#draw").mousemove(
   function(e){
    $(this).css('cursor', 'crosshair');
    if(event.which == 1){
        //основной код
        var pos = $(this).offset();
        var Xinner = e.pageX-pos.left;
        var Yinner = e.pageY-pos.top;
          $(this).drawArc({
            fillStyle: collor,
            x: Xinner, y: Yinner,
            radius:$("input[type=range]").val()
          });
     }

  });


  $("#DESTROY").mousedown(function(){
    $('#draw').clearCanvas();
  });

  $("#save").mousedown(function(){

    window.location.href=$("#draw").getCanvasImage('jpeg');
  });


  var collor='white';
  $("#collor").text("Цвет: белый");


  $("#black").mousedown(function(){
    if(event.which==1){
      collor='black';
      $("#collor").text("Цвет: чёрный");
    }
    else $("canvas").css("background-color","black");
  });

  $("#blue").mousedown(function(){
      if(event.which==1){
    collor='rgb(101, 210, 182)';
    $("#collor").text("Цвет: голубой");
  }else $("canvas").css("background-color","rgb(101, 210, 182)");
  });

  $("#pink").mousedown(function(){
      if(event.which==1){
    collor='rgb(223, 113, 209)';
    $("#collor").text("Цвет: розовый");
  }else $("canvas").css("background-color","rgb(223, 113, 209)");
  });

  $("#red").mousedown(function(){
      if(event.which==1){
    collor='red';
    $("#collor").text("Цвет: красный");
  }else $("canvas").css("background-color","red");
  });

  $("#white").mousedown(function(){
      if(event.which==1){
        collor='white';
        $("#collor").text("Цвет: белый");
        }
      else $("canvas").css("background-color","white");
  });

  $("#yellow").mousedown(function(){
  if(event.which==1){
    collor='yellow';
    $("#collor").text("Цвет: жёлтый");
  }else $("canvas").css("background-color","yellow");
  });

});
