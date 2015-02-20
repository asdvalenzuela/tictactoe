$( document ).ready(function() {

    var game = new Game();

    $('td').on('click', function() {
        //pointer-events are changed to none so player cannot override previous moves
        $(this).html('x').css('pointer-events', 'none');
        game.makeMove(this.id);
        //alert if the game is over
        game.checkGameOver();
        //if the game is not over, the computer plays
        if (game.board.isWinner() === false && game.board.blankSpaces.length !== 0) {
            game.computerPlays();
        }
    });

    $('#new-game').on('click', function(e) {
        e.preventDefault();
        game.endGame();
        game.newGame();
    });
    
});