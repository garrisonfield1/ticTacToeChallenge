var userChar;
var compChar;
var board = ['','','','','','','','',''];
var openBoard = [];
var userTurn;
var userMoves = [];
var compMoves;
var currentCompSpace;
var id = '';


var moveCount;
var winGame;
var isTie;

// create proto function off array that compares 2 arrays
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}


// Enable board after userChar set to X/O
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

function assignCompMove(currentCompSpace){
    console.log("inside begin assignCompMove where compSpace = " + currentCompSpace);
    switch (currentCompSpace) {
    case 0:
        return id = "a1";
        break;
    case 1:
        return id = "a2";
        break;
    case 2:
        return id = "a3";
        break;
    case 3:
        return id = "b1";
        break;
    case 4:
        return id = "b2";
        break;
    case 5:
        return  id = "b3";
        break;
    case 6:
        return id = "c4";
        break;
    case 7:
        return id = "c5";
        break;
    case 8:
        return id = "c6";
        break;
    }
    console.log("Inside end assignCompMove: " + currentCompSpace);
}

function checkWin(){
    if(userMoves.length == 3 ) {
        userMoves = userMoves.sort();

        if (userMoves.equals(['0', '1', '2'])) {
            alert(userChar + " Won the Game with 012");
        }else if(userMoves.equals( ['0', '4', '8'] ) ){
            alert(userChar + " Won the Game with 048");
        }else if(userMoves.equals( ['0', '3', '6'] ) ){
            alert(userChar + " Won the Game with 036");
        }else if(userMoves.equals( ['1', '4', '7'] ) ){
            alert(userChar + " Won the Game with147 ");
        }else if(userMoves.equals( ['2', '5', '8'] ) ){
            alert(userChar + " Won the Game with 258");
        }else if(userMoves.equals( ['3', '4', '5'] ) ){
            alert(userChar +  "Won the Game with 345 ");
        }else if (userMoves.equals( ['6', '7', '8'] ) ){
            alert(userChar + " Won the Game with 678 ");
        }else{ alert( " tie Game ")}
    }

}

// return compChar into randomly selected blank square
function strategyRandom() {
    // gather all the blank spots in an array
    for (x = 0; x < board.length;  x++) {

        if (board[x] ==='') openBoard.push(x);
    }
    //console.log("before openBoard = " + openBoard);
    // shfit off openBoard
    if (userMoves.length < 2) {
        console.log("inside StrategyRandom ");
        currentCompSpace = openBoard.shift();
        console.log("inside StrategyRandom where CompSpace Should be random = " + currentCompSpace);
        assignSquare(userTurn, currentCompSpace);
    }else {
        blockWin()
        assignCompMove(currentCompSpace);
    }
    //console.log("after openBoard = " + openBoard);



    //console.log("# to grab is: " + id);
    document.getElementById(id).className = userTurn;
    openBoard = [];
    id = '';
    currentCompSpace = '';
    changeTurn();
}



function blockWin(){
    if(userMoves.length === 2 ) {
        userMoves = userMoves.sort();
        console.log("inside blockWin");
        if (userMoves.equals(['0', '1'])) {
            assignSquare(userTurn, 2);
            assignCompMove(2);
        }else if(userMoves.equals( ['0', '4'] ) ){
            assignSquare(userTurn, 8);
            assignCompMove(8);
        }else if(userMoves.equals( ['0', '3'] ) ){
            assignSquare(userTurn, 6);
            assignCompMove(6);
        //}else if(userMoves.equals( ['1', '4', '7'] ) ){
        //    place marker
        //}else if(userMoves.equals( ['2', '5', '8'] ) ){
        //    place marker
        //}else if(userMoves.equals( ['3', '4', '5'] ) ){
        //    alert(userChar +  "Won the Game with 345 ");
        //}else if (userMoves.equals( ['6', '7', '8'] ) ){
        //    alert(userChar + " Won the Game with 678 ");
        }else{ alert( " tie Game ")}
    }

}





// disable board until userChar is chosen
document.getElementById('board').style.pointerEvents = 'none';

// click a square and save to board array
document.getElementById("board").addEventListener("click", function(e) {
    // assign div data-index to var
    var square = e.target.dataset.index;

    // if targetSquare is open, place marker in array
    if (checkOpenSquare(square)){
        assignSquare(userTurn, square);

        //add square location to userMoves.
        userMoves.push(square);

        // ammend X or O to targetSquare UI
        e.srcElement.classList.add(userTurn);

        console.log("userMoves: " + userMoves);
    }
    changeTurn();
    compChance();


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


