function scrollChange(){
  var distanceY = window.scrollY;
  var shrinkOn = 90;
  var header = document.getElementById('menuBar');
  var headerSize = $("#menuBar").height();

  if (distanceY > shrinkOn) {
    //$("#menuBar").animate({ height:'50'}, 0);
    $("#menuBar").css('background', 'rgba(255, 255, 255, 1)');
    $("#menuBar").css('color', 'red');
    $("#menuBar").css('box-shadow', '0px 0px 4px rgba(0, 0, 0, 0.4)');

  } else {
    if (headerSize < 61) {
      //$("#menuBar").animate({ height:'0'}, 0);
      //$("#menuBar").css('color', 'red');
      $("#menuBar").css('background', 'rgba(255, 255, 255, 0)');
      $("#menuBar").css('box-shadow', '0px 0px 4px rgba(0, 0, 0, 0)');
    }
  }
}

function scrollMenu(){
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  var breakpoint = 100;

  console.log(top);

  if(top >= breakpoint){ //Cuando baja
    $("#menuBar").animate({ height:'45'}, 600);
    //console.log("Baja");
  }else{ //Cuando sube
    $("#menuBar").animate({ height:'0'}, 600);
    //console.log("Sube");
  }
}

//$(menu).animate({left: "-=300px"}, 300);
