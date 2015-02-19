function MinimaxGame(game) {
    var blankSpaces = game.board.blankSpaces.slice();
    var xSpaces = game.board.xSpaces.slice();
    var oSpaces = game.board.oSpaces.slice();
    this.gameBoard = new Board(blankSpaces, xSpaces, oSpaces);
    this.gameState = new Game(game.turns, this.gameBoard);

    this.minimax = function(minimaxGame, alpha, beta) {
        if (minimaxGame.board.isWinner() === 'human') {
            return -1;
        }
        else if (minimaxGame.board.isWinner() === 'computer') {
            return 1;
        }
        else if (minimaxGame.board.blankSpaces.length === 0){
            return 0;
        }
        for (var i = 0; i < minimaxGame.board.blankSpaces.length; i++) {
            var move = minimaxGame.board.blankSpaces[i];

            //create identical game and board instances to manipulate
            var blankSpaces = minimaxGame.board.blankSpaces.slice();
            var xSpaces = minimaxGame.board.xSpaces.slice();
            var oSpaces = minimaxGame.board.oSpaces.slice();
            var possibleBoard = new Board(blankSpaces, xSpaces, oSpaces);
            var possibleGame = new Game(minimaxGame.turns, possibleBoard);

            possibleGame.makeMove(possibleGame.board.blankSpaces[i]);
            var val = this.minimax(possibleGame, alpha, beta);
            if (minimaxGame.activePlayer() === 'computer') {
                if (val > alpha) {
                    alpha = val;
                }
                if (alpha >= beta) {
                    return beta;
                }
            }
            else {
                if (val < beta) {
                    beta = val;
                }
                if (beta <= alpha) {
                    return alpha;
                }
            }
        }
        if (minimaxGame.activePlayer() === 'computer') {
            return alpha;
        }
        else {
            return beta;
        }
    };
    this.determine = function() {
        var a = 0;
        var choices = [];
        for (var i = 0; i < this.gameBoard.blankSpaces.length; i++) {
            var move = this.gameBoard.blankSpaces[i];

            //create identical game and board instances to manipulate
            var miniblankSpaces = this.gameBoard.blankSpaces.slice();
            var minixSpaces = this.gameBoard.xSpaces.slice();
            var minioSpaces = this.gameBoard.oSpaces.slice();
            var minimaxBoard = new Board(miniblankSpaces, minixSpaces, minioSpaces);
            var minimaxGame = new Game(this.gameState.turns, minimaxBoard);

            minimaxGame.makeMove(minimaxGame.board.blankSpaces[i]);
            var val = this.minimax(minimaxGame, -2, 2);
            if (val > a) {
                a = val;
                choices = [move];
            }
            else if (val === a) {
                choices.push(move);
            }
        }
        return choices[0];
        //delete references to created objects delete X.y
    };
}