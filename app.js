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


function compMove(){
    for(var prop in board){
        console.log("there are " + prop in + board[prop]);

    }
};

// click a square and save to board array
document.getElementById("board").addEventListener("click", function(e) {
    // identify clicked targetSquare
    if(e.target && e.target.nodeName == "DIV") {
        var targetSquareId = e.target.id;

        // assign div data-index to var
        var square = e.target.dataset.index;

        // if targetSquare is open, place marker in array.
        if (checkOpenSquare(square)){
            assignSquare(userTurn, square);

            // ammend X or O to targetSquare UI
            e.srcElement.classList.add(userTurn);

            changeTurn();

            compMove();


        }

    }
});



