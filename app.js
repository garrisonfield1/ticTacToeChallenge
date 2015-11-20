var userChar;
var compChar;
var board = ['','','','','','','','',''];
var userTurn;
var userMoves = [];
var moveCount;
var winGame;
var isTie;

// user chooses X or O, computer is assigned alternative
function chooseChar(elem){
    if(elem.id === 'chooseX'){
        userTurn = userChar = 'X';
        compChar = 'O';
    }else{
        userTurn = userChar = 'O';
        compChar = 'X';
    }
    disableBtn();
};

// disable button after choice.
function disableBtn() {
    document.getElementById("chooseX").disabled = 'true';
    document.getElementById("chooseO").disabled = 'true';
    console.log("userChar = " + userChar);
    //console.log("compChar = " + compChar);

}

// identifies who's turn it is, changes with onClick of targetSquare
function changeTurn(){
    if(userTurn === "X"){
        userTurn = "O";
    } else{ userTurn = "X"; }
}

// check if square is already taken
function checkOpenSquare(square){
    if(board[square] === ''){
        return true;
    }
}


// assign marker to array
function assignSquare(symbol, square){
    board[square] = symbol;
    return board;
}

function compMove(){
    var move = getRandomInt;
    if(checkOpenSquare(move)){
        board[move] = compChar;

    };
}

// go in a randomly selected blank space
//function strategyRandom() {
//    // gather all the blank spots in an array
//    var blanks = [];
//    for (var x=0; x<3; x++) {
//        for (var y=0; y<3; y++) {
//            if (val(x,y)=='') blanks.push([x,y]);
//        }
//    }
//    // return a random entry in the array of blanks
//    if (blanks.length>0) {
//        var r = Math.floor((Math.random()*blanks.length));
//        return blanks[r];
//    }
//    else return false;
//}
function getRandomInt() {
    return Math.floor(Math.random() * 9);
}

// create array of user moves
function userMovesFn() {
    for(i = 0; i<board.length; i++){
        if(board[i] === userChar){
            userMoves.push(i);
        }
    }
    console.log("user moves so far: " + userMoves);
}

//function compMoveLogic(userMoves){
//
//}

    // click a square and save to board array
    document.getElementById("board").addEventListener("click", function (e) {
        // identify clicked targetSquare
        if(e.target && e.target.nodeName == "DIV") {

            // assign div # to var
            var square = e.target.dataset.index;

            // if targetSquare is open, place marker in array.

                assignSquare(userChar, square);
                console.log(board);

                // ammend X or O to targetSquare UI
                e.srcElement.classList.add(userTurn);

            changeTurn();


            //userMovesFn();


        }

    });

//var fruits = ["Banana", "Orange", "Apple", "Mango" , "Apple"];
//var apples = [];
//for(var i = 0; i <= fruits.length; i++){
//    if(fruits[i] === "Apple"){
//        apples.push(i);
//    }
//}
//console.log(apples);


/*
var userChar = 'X';
var compChar = 'Y';
var board = ['','X','','X','','','','',''];
var userTurn;
*/



// create array of user moves
//function userMovesFn() {
//    var idx = board.indexOf(userChar);
//    while (idx != -1) {
//        userMoves.push(idx);
//        idx = board.indexOf(userChar, idx + 1);
//    }
//    console.log("user moves so far: " + userMoves);
//}






