function Game(turns, board) {
    this.turns = turns || 0;
    this.board = board || new Board();
    this.activePlayer = function() {
        if (this.turns % 2 === 0) {
            return 'human';
        }
        else {
            return 'computer';
        }
    };
    this.makeMove = function(spaceId) {
        //remove the space from blankSpaces
        var index = this.board.blankSpaces.indexOf(spaceId);
        this.board.blankSpaces.splice(index, 1);
        if (this.activePlayer() == 'computer') {
            this.board.oSpaces.push(spaceId);
        }
        else {
            this.board.xSpaces.push(spaceId);
        }
        this.turns += 1;
    };
    this.computerPlays = function() {
        miniGame = new MinimaxGame(this);
        //choose the best possible move
        result = miniGame.determine();
        this.makeMove(result);
        var spaceId = '#' + result;
        $(spaceId).html('o').css('pointer-events', 'none');
        this.checkGameOver();
    };
    this.endGame = function() {
        this.board.clearBoard();
        delete this.board;
    };
    this.newGame = function() {
        this.turns = 0;
        this.board = new Board();
    };
    this.checkGameOver = function() {
        if (this.turns >= 5) {
            if (this.board.isWinner() === 'human') {
                //prevents player from changing the board post-win
                this.board.preventBoardChanges();
                $( "#dialog" ).html('<p>Congratulations! You won!</p>').dialog();
            }
            else if (this.board.isWinner() === 'computer') {
                this.board.preventBoardChanges();
                $( "#dialog" ).html('<p>Sorry, you lost.</p>').dialog();
            }
        }
        if (this.turns === 9) {
            this.board.preventBoardChanges();
            $( "#dialog" ).html('<p>It\'s a tie!</p>').dialog();
        }
    };
}