function MinimaxGame(game) {
    //create copies of the arrays representing the current board state
    var blankSpaces = game.board.blankSpaces.slice();
    var xSpaces = game.board.xSpaces.slice();
    var oSpaces = game.board.oSpaces.slice();
    //create a new game with this information so that the actual game is not affected during next move calculations
    this.gameBoard = new Board(blankSpaces, xSpaces, oSpaces);
    this.gameState = new Game(game.turns, this.gameBoard);

    this.minimax = function(minimaxGame, alpha, beta) {
        //if the game is over, we return a score based on the result
        if (minimaxGame.isWinner(minimaxGame.board.xSpaces) === true) {
            return -1;
        }
        else if (minimaxGame.isWinner(minimaxGame.board.oSpaces) === true) {
            return 1;
        }
        else if (minimaxGame.board.blankSpaces.length === 0) {
            return 0;
        }
        for (var i = 0; i < minimaxGame.board.blankSpaces.length; i++) {

            //create identical game and board instances to manipulate
            var blankSpaces = minimaxGame.board.blankSpaces.slice();
            var xSpaces = minimaxGame.board.xSpaces.slice();
            var oSpaces = minimaxGame.board.oSpaces.slice();
            var possibleBoard = new Board(blankSpaces, xSpaces, oSpaces);
            var possibleGame = new Game(minimaxGame.turns, possibleBoard);

            possibleGame.makeMove(possibleGame.board.blankSpaces[i]);
            var val = this.minimax(possibleGame, alpha, beta);

            //maximizing - update alpha with the best possible score so far if the player is the computer
            if (minimaxGame.activePlayer() === 'computer') {
                if (val > alpha) {
                    alpha = val;
                }
                //case for pruning
                if (alpha >= beta) {
                    return beta;
                }
            }
            //minimizing - update beta with the worst possible score so far if the player is the human 
            else {
                if (val < beta) {
                    beta = val;
                }
                //case for pruning
                if (beta <= alpha) {
                    return alpha;
                }
            }
        }
        //if the active player is the computer, the highest possible score is chosen
        if (minimaxGame.activePlayer() === 'computer') {
            return alpha;
        }
        //if the active player is the human, the lowest possible score is chosen
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
            var blankSpaces = this.gameBoard.blankSpaces.slice();
            var xSpaces = this.gameBoard.xSpaces.slice();
            var oSpaces = this.gameBoard.oSpaces.slice();
            var minimaxBoard = new Board(blankSpaces, xSpaces, oSpaces);
            var minimaxGame = new Game(this.gameState.turns, minimaxBoard);

            minimaxGame.makeMove(minimaxGame.board.blankSpaces[i]);
            var val = this.minimax(minimaxGame, -2, 2);

            //create a list of the best possible moves, and choose a move from the list
            if (val > a) {
                a = val;
                choices = [move];
            }
            else if (val === a) {
                choices.push(move);
            }
        }
        return choices[0];
    };
}