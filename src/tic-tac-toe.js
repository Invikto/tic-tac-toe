class TicTacToe {
  constructor() {
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.players = ['x', 'o'];
    this.isFirstPlayer = true;
  }

  getCurrentPlayerSymbol() {
    return this.isFirstPlayer ? this.players[0] : this.players[1];
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] =
        this.getCurrentPlayerSymbol();
      this.isFirstPlayer = !this.isFirstPlayer;
    }
  }

  isFinished() {
    return (this.noMoreTurns() || !!this.getWinner());
  }

  getWinner() {
    let horiz;
    let vert;
    let diag1;
    let diag2;
    
    for (let i = 0; i < 3; i++) {
      horiz = (this.field[i][0] !== null) &&
        (this.field[i][0] === this.field[i][1]) &&
        (this.field[i][0] === this.field[i][2]);
      if (horiz) {
        return this.field[i][0];
      }
      
      vert = (this.field[0][i] !== null) &&
        (this.field[0][i] === this.field[1][i]) &&
        (this.field[0][i] === this.field[2][i]);
      if (vert) {
        return this.field[0][i];
      }
    }
    
    diag1 = (this.field[1][1] !== null) &&
      (this.field[1][1] === this.field[0][0]) &&
      (this.field[1][1] === this.field[2][2]);
    diag2 = (this.field[1][1] !== null) &&
      (this.field[1][1] === this.field[0][2]) &&
      (this.field[1][1] === this.field[2][0]);
    if (diag1 || diag2) {
      return this.field[1][1];
    }

    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.field[i][j]) {
          return false;
        }
      }
    }

    return true;
  }

  isDraw() {
    return (this.noMoreTurns() && !this.getWinner());
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
