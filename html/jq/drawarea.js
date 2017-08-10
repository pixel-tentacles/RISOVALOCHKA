$(document).ready(function() {
   $("#draw").mousemove(
   function(e){
    $(this).css('cursor', 'crosshair');
    if(event.which == 1){
      //пасхалки
        blockbox=true; //малевич
        if(changeBendy){
          if(collor!='black') {step2Bendy=false; changeBendy=false;}
          else step2Bendy=true;
        }
        //основной код
        var pos = $(this).offset();
        var Xinner = e.pageX-pos.left;
        var Yinner = e.pageY-pos.top;

        if(collor!="kappa"){
          $(this).drawArc({
            fillStyle: collor,
            x: Xinner, y: Yinner,
            radius:$("input[type=range]").val()
          });
        }
        else
        {
          $(this).drawImage({
            source: 'img/kappa.png',
            x: Xinner, y: Yinner,
            width: $("input[type=range]").val(),
            height: $("input[type=range]").val(),

          });
        }
     }

  });

  $("#drawdrawdraw").mousemove(function(){
    $(this).css('cursor','pointer');
  });

  $("#drawdrawdraw").mousedown(function(){
    $("#draw").drawText({
      fillStyle: '#b151cd',
      strokeStyle: '#b310c8',
      strokeWidth: 2,
      x: 350, y: 600,
      fontSize: 80,
      fontFamily: 'matura mt script capitals',
      text: 'Pixel Tentacles',
    });
  });

  var step1Bendy=false;
  var step2Bendy=false;
  var changeBendy=true;

  $("#DESTROY").mousedown(function(){
    $('#draw').clearCanvas();
    blockbox=false;
    if(step1Bendy&&collor=='black'&&step2Bendy){
      $('#draw').drawImage({
        source: 'img/bendy.png',
        x: 350, y: 460,
        width: 300,
        height: 500,
    });
  }
  step2Bendy=false;
  changeBendy=true;
  });

  $("#save").mousedown(function(){

    window.location.href=$("#draw").getCanvasImage('jpeg');
  });

  $("#kappa").mousedown(function(){
      collor='kappa';
      $("#collor").text("HEY! KAPPA KAPPA KAPPA");
  });

  var collor='white';
  $("#collor").text("Цвет: белый");

  var step1Homer=false;

  var blockbox=false;
  $("#black").mousedown(function(){
    step1Homer=false;
    if(event.which==1){
      collor='black';
      $("#collor").text("Цвет: чёрный");
    }
    else {
      step1Bendy=false;
      if(blockbox==false){
        blockbox=true;
        $("#blackbox")
        .animate({
          left: '250px'
        }, 590)
        .animate({
          left: '110px'
        }, 450);
      }
      $("canvas").css("background-color","black");
    }
  });

  $("#blue").mousedown(function(){
      step1Homer=false;
      if(event.which==1){
    collor='rgb(101, 210, 182)';
    $("#collor").text("Цвет: голубой");
  }else{step1Bendy=false; $("canvas").css("background-color","rgb(101, 210, 182)");}
  });

  $("#pink").mousedown(function(){
      step1Homer=true;
      if(event.which==1){
    collor='rgb(223, 113, 209)';
    $("#collor").text("Цвет: розовый");
  }else{step1Bendy=false; $("canvas").css("background-color","rgb(223, 113, 209)");}
  });

  $("#red").mousedown(function(){
    step1Homer=false;
      if(event.which==1){
    collor='red';
    $("#collor").text("Цвет: красный");
  }else{step1Bendy=false; $("canvas").css("background-color","red");}
  });

  $("#white").mousedown(function(){
    step1Homer=false;
      if(event.which==1){
        collor='white';
        $("#collor").text("Цвет: белый");
        }
      else{step1Bendy=true; $("canvas").css("background-color","white");}
  });

  $("#yellow").mousedown(function(){
  if(step1Homer) $("#homer").css("opacity","1");
  if(event.which==1){
    collor='yellow';
    $("#collor").text("Цвет: жёлтый");
  }else {step1Bendy=false; $("canvas").css("background-color","yellow");}
  });

});
