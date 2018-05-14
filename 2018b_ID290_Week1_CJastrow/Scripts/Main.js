var x = 0;

var select = document.getElementById("select");
var open = document.getElementById("open");
var insideSound = document.getElementById("insideSound");
insideSound.volume = .1;
var close = document.getElementById("close");

$(".unselected").click(function() {
	select.play();
	// if(x == 0){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-230px",left:"0px"},500);
	   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 1){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-230px",left:"100px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 2){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-230px",left:"200px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 3){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-230px",left:"300px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 4){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-185px",left:"0px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 5){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-185px",left:"100px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 6){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-185px",left:"200px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 7){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-185px",left:"300px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 8){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-140px",left:"0px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 9){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-140px",left:"100px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 10){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-140px",left:"200px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
	// else if(x == 11){
	//   $(this).css('position','absolute')
	//   $(this).animate({top:"-140px",left:"300px"},200);
	//   $(this).removeClass( "unselected" );
	//   x++;
	//  }
});

$( function() {
    $( ".outside" ).draggable();
  } );

$( function() {
    $( ".inside" ).draggable();
  } );

$("#reset").click(function() {
	location.reload();
});

var door = "closed";

$("#door").click(function() {
	if(door == "closed"){
		open.play();
		insideSound.play();
		setTimeout(function(){
			insideSound.volume = .4;
		}, 200);
		$(".unselected").animate({opacity:'0'},250);
		setTimeout(function(){
			$("#fridgeBottom").animate({width:'50px',left:'400px'},1000);
			$("#door").animate({left:"345px"},1000)
			$(".unselected").css('display','none');
		}, 250);
		door = "open";
		$("#door").html("Close Door");
	} else if(door == "open"){
		insideSound.volume = .2;
		setTimeout(function(){
			close.play();
			insideSound.pause();
			insideSound.currentTime = 0;
		}, 1000);
		$("#fridgeBottom").animate({width:'420px',left:'35px'},1000);
		$(".unselected").css('display','inline-block');
		setTimeout(function(){
			$(".unselected").animate({opacity:'1'},500);
		}, 1000);
		door = "closed";
		$("#door").html("Open Door");
		$("#door").animate({left:"36px"},1000)
	}
});

// $(".food").click(function(){
// 	$(this).css('opacity','0');
// })
