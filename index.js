
var moves = [];
var colour = ["green","red","yellow","blue"];
var playerMoves = [];
var level = 1;
var count;
var randomNumber;




$("body").keypress(function(){
    moves = [];
    $("h1").text("Press any key to start the game");
    getMove();
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");


  playerMoves.push(userChosenColour);

  $("div"+"."+ userChosenColour).addClass("pressed");
  var audio = new Audio("sounds/"+ userChosenColour +".mp3");
  audio.play();
  setTimeout(function() {
    $("div"+"."+ userChosenColour).removeClass("pressed");
  }, 100);



  if(moves[count] != userChosenColour)
  {
    $("body").addClass("game-over");

    $("h1").text("Game Over, Press Any Key to Restart");

    var game_over_audio = new Audio("sounds/wrong.mp3");
    game_over_audio.play();

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 500);

    moves = [];
    level = 1;
    count = 0;

  }

  if(count==moves.length-1 && moves.length != 0)
  {
    level++;
    console.log("Next level");
    setTimeout(getMove, 1000);
  }

   count++;
});


function getMove(){

  playerMoves = [];
  count = 0;


  $("h1").text("Level " + String(level));

  randomNumber = Math.floor((Math.random()*4)); // 1 - green    2 - red    3 - yellow    4 - blue

  $("div"+"."+colour[randomNumber]).addClass("pressed");
  var audio = new Audio("sounds/"+ colour[randomNumber] +".mp3");
  audio.play();
  setTimeout(function() {
    $("div"+"."+colour[randomNumber]).removeClass("pressed");
  }, 100);

  moves.push(colour[randomNumber]);
  console.log(moves);

}
