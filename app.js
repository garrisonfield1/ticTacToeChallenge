var userChar;
var compChar;
var board = ['','','','','','','','',''];
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
    var blanks = [];
    for (var x=0; x<3; x++) {
        for (var y=0; y<3; y++) {
            if (val(x,y)=='') blanks.push([x,y]);
        }
    }
    // return a random entry in the array of blanks
    if (blanks.length>0) {
        var r = Math.floor((Math.random()*blanks.length));
        return blanks[r];
    }
    else return false;
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
    if(e.target && e.target.nodeName == "DIV") {

        // assign div data-index to var
        var square = e.target.dataset.index;

        // if targetSquare is open, place marker in array.
        if (checkOpenSquare(square)){
            assignSquare(userTurn, square);

            // ammend X or O to targetSquare UI
            e.srcElement.classList.add(userTurn);
        }
        changeTurn();
        compMove();
    }
});


//randomMove();


