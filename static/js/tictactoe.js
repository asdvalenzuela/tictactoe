$( document ).ready(function() {

    var game = new Game();

    $('td').on('click', function(e) {
        $(this).text('x').css('pointer-events', 'none');
        game.makeMove(this.id);
        game.checkGameOver();
        if (game.board.isWinner() === false && game.board.blankSpaces.length !== 0) {
            game.computerPlays();
        }
    });

    $('#new-game').on('click', function(e) {
        e.preventDefault();
        game.endGame();
    });
    
});