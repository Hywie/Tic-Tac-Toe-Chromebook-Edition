
function maxMovesMade() {
  if(this.numberOfMoves >= 9){
    return true;
  }
  return false;
}

/*
 * Traverses all possible combinations to see if there is a winning pattern in table
 */
function calcWinner() {

    if(maxMovesMade()){
        roundWon(true);
        return true;
    } else if (getGridValue(0, 0) == getGridValue(0, 1) && getGridValue(0, 1) == getGridValue(0, 2) && getGridValue(0, 0) !== null) {
        roundWon(false);
        return true;
    } else if (getGridValue(0, 0) == getGridValue(1, 0) && getGridValue(1, 0) == getGridValue(2, 0) && getGridValue(0, 0) !== null) {
        roundWon(false);
        return true;
    } else if (getGridValue(0, 1) == getGridValue(1, 1) && getGridValue(1, 1) == getGridValue(2, 1) && getGridValue(0, 1) !== null) {
        roundWon(false);
        return true;
    } else if (getGridValue(0, 2) == getGridValue(1, 2) && getGridValue(1, 2) == getGridValue(2, 2) && getGridValue(0, 2) !== null) {
        roundWon(false);
        return true;
    } else if (getGridValue(2, 0) == getGridValue(2, 1) && getGridValue(2, 1) == getGridValue(2, 2) && getGridValue(2, 0) !== null) {
        roundWon(false);
        return true;
    } else if (getGridValue(0, 0) == getGridValue(1, 1) && getGridValue(1, 1) == getGridValue(2, 2) && getGridValue(0, 0) !== null) {
        roundWon(false);
        return true;
    } else if (getGridValue(0, 2) == getGridValue(1, 1) && getGridValue(1, 1) == getGridValue(2, 0) && getGridValue(0, 2) !== null) {
        roundWon(false);
        return true;
    } else {
        return false;
    }
}

/*
 * Returns the value of the tile depedning on the grid cordinates given. Uses logical array table.
 */
function getGridValue(x, y) {
    try {
        return (logicalTable[x])[y].childNodes[0].innerHTML;
    } catch (e) {
        return null;
    }
}

/*
 * Calculates who has won and displays a winning message
 */
function updateScore() {
    if (playerOTurn) {
        this.xScore += 1;
    } else {
       this.oScore += 1;
    }
}

function roundWon(isDraw){
    if(!isDraw){
      updateScore();
    }
    this.roundNum += 1;
}