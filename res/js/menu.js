function scrollChange(){
  var yPos = window.scrollY;

  if(yPos > 100){
      $("#menuBar").animate({ height:'45'}, 600);
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
