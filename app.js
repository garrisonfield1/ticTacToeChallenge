var userChar;
var compChar;
var board = ['','','','','','','','',''];
var openBoard = [];
var userTurn;
var userMoves = [];
var compMoves;


var moveCount;
var winGame;
var isTie;



function enableBoard(){
    document.getElementById('board').style.pointerEvents = 'auto';
}


// user chooses X or O, computer is assigned alternative
function chooseChar(elem){
    enableBoard();
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


// return compChar into randomly selected blank square
function strategyRandom() {
    // gather all the blank spots in an array
    for (x = 0; x < board.length;  x++) {

        if (board[x] ==='') openBoard.push(x);
    }
    console.log("before openBoard = " + openBoard);
    // shfit off openBoard

    var currentCompSpace = openBoard.shift();
    assignSquare(userTurn, currentCompSpace);
    console.log("after openBoard = " + openBoard);
    var id = '';

    switch (currentCompSpace) {
        case 0:
            id = "a1";
            break;
        case 1:
            id = "a2";
            break;
        case 2:
            id = "a3";
            break;
        case 3:
            id = "b1";
            break;
        case 4:
            id = "b2";
            break;
        case 5:
            id = "b3";
            break;
        case 6:
            id = "c4";
            break;
        case 7:
            id = "c5";
            break;
        case 8:
            id = "c6";
            break;
    }
    console.log("# to grab is: " + id);
    document.getElementById(id).className = userTurn;
    openBoard = [];
    id = '';
    changeTurn();


}


function checkWin(){

    if(userMoves === ['0','4','8']){
        alert(userChar + " Wins!");

    }
}



// disable board until userChar is chosen
document.getElementById('board').style.pointerEvents = 'none';

// click a square and save to board array
document.getElementById("board").addEventListener("click", function(e) {
    // assign div data-index to var
    var square = e.target.dataset.index;

    // if targetSquare is open, place marker in array add square location to userMoves.
    if (checkOpenSquare(square)){
        assignSquare(userTurn, square);

        userMoves.push(square);


        // ammend X or O to targetSquare UI
        e.srcElement.classList.add(userTurn);
        console.log("userMoves: " + userMoves);
        var array2 = [6,7,8];
        var is_same = userMoves.every(function(element, index) {
                return element === array2[index];
            });
        if(is_same) {
            alert(userChar + " Wins!");
        }
    }
    changeTurn();
    strategyRandom();
    checkWin();

});


/*
 var userChar = 'X';
 var compChar = 'Y';
 var board = ['','X','','X','','','','',''];
 var openBoard = [];
 var userTurn;

 for (x = 0; x < board.length;  x++) {

 if (board[x] ==='') {openBoard.push(i)};
 }
 console.log("openBoard = " + openBoard);
 */


