function startGame(){

for(var i = 1; i<= 9; i++){
    clearBox(i);
}
    document.turn ="X";
    document.winner = null;
    setMessage(document.turn + "get's to Start.")
}
function setMessage(msg){
    document.getElementById('message').innerText = msg;
}
function nextMove(Shikaku){
    if (document.winner != null){
        setMessage(document.turn + " already won!! Daddy is on the roll!!")
    } else if(Shikaku.innerText ==''){
       Shikaku.innerText = document.turn;
     switchTurn();
} else{
    setMessage("Pick another Shikaku.This is already taken!!!")
 }
}

function switchTurn(){
    if(!movesAvailable()) {
      setMessage ("Hikiwake! Tie Game!");
    }else if(checkForWinner(document.turn)){
      setMessage ("Congrats" + document.turn + ", you won!")
      document.winner = document.turn;
    }else if(document.turn =="X"){
       document.turn ="O";
       setMessage("It's" + document.turn + "'s turn.'")   
    }else{
        document.turn ="X";
        setMessage("It's" + document.turn + "'s turn.'")  
  }
}
function checkForWinner(move){
    var result = false;
    if(checkRow(1, 2, 3, move) ||
       checkRow(4, 5, 6, move) ||
       checkRow(7, 8, 9, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(3, 6, 9, move) ||
       checkRow(1, 5, 9, move) ||
       checkRow(3, 5, 7, move)) {
           result =true;
       }
       return result;

}

function movesAvailable() {
  for (i=1; i<=9; i++) {
    if (getBox(i) === "") {
      return true;
    }
  }
  return false;
}

function checkRow(a,b,c,move){
 var result = false;
 if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
     result =true;
 }
 return result;
}

function getBox(number){
    return document.getElementById("s" + number).innerText;
}
function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}
