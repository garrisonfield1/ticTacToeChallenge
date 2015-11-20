var userChar;
var compChar;
var board = ['','','','','','','','',''];
var openBoard = [];
var userTurn;

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


function getLegalMoves(board){
    var moves = 0;
    for (var i=0; i<9; i++){
        if ((board & (1<<(i*2+1))) == 0){
            moves |= 1 << i;
        }
    }
    return moves;
}

// go in a randomly selected blank space
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

function option(name) {
    //return $("input[name='"+name+"']")[0].checked;
}

function compMove() {
    var strategies = [];
    if (option('random')) strategies.push(strategyRandom);
    for (var i=0; i<strategies.length; i++) {
        var turn = strategies[i]();
        if (!turn) continue;
        val(turn[0], turn[1], computer);
        break;
    }
}


// click a square and save to board array
document.getElementById("board").addEventListener("click", function(e) {
    // identify clicked targetSquare


        // assign div data-index to var
        var square = e.target.dataset.index;

        // if targetSquare is open, place marker in array.
        if (checkOpenSquare(square)){
            assignSquare(userTurn, square);
            //console.log(board);

            // ammend X or O to targetSquare UI
            e.srcElement.classList.add(userTurn);
        }
        changeTurn();
    strategyRandom();

});


//randomMove();

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