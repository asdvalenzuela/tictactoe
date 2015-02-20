describe("endGame", function() {
    game = new Game();
    for (var i = 0; i < game.board.rows_.length; i++) {
        for (var j = 0; j < game.board.columns.length; j++) {
            spaceId = '#' + game.board.rows_[i] + game.board.columns[j];
            $(spaceId).html('x');
        }
    }
    game.endGame();
    if ($('#a1').html() === '' && $('#a2').html() === '' && $('#a3').html() === '' &&
        $('#b1').html() === ''  && $('#b2').html() === ''  && $('#b3').html() === '' &&
        $('#c1').html() === ''  && $('#c2').html() === ''  && $('#c3').html() === '') {
        result = true;
    }
    else {
        result = false;
    }
    it("should clear board", function() {
        expect(result).toBe(true);
    });
});

describe("endGame", function() {
    game = new Game();
    game.endGame();
    if (game.board === undefined) {
        result = true;
    }
    else {
        result = false;
    }
    it("should delete board", function() {
        expect(result).toBe(true);
    });
});

describe("newGame", function() {
    game = new Game();
    game.endGame();
    game.newGame();
    if (game.turns === 0) {
        result = true;
    }
    else {
        result = false;
    }
    it("should reset turns", function() {
        expect(result).toBe(true);
    });
});

describe("newGame", function() {
    game = new Game();
    game.endGame();
    game.newGame();
    if (game.board.blankSpaces.length === 9 &&
        game.board.xSpaces.length === 0 &&
        game.board.oSpaces.length === 0) {
        result = true;
    }
    else {
        result = false;
    }
    it("should create new board", function() {
        expect(result).toBe(true);
    });
});

describe("makeMove", function() {
    game = new Game();
    game.makeMove('#a1');
    if (game.board.blankSpaces.indexOf('#a1') === -1) {
        result = true;
    }
    else {
        result = false;
    }
    it("should remove spaceId from blankSpaces", function() {
        expect(result).toBe(true);
    });
});

describe("makeMove", function() {
    game = new Game();
    game.makeMove('#a1');
    if (game.board.xSpaces.indexOf('#a1') !== 0 ||
        game.board.xSpaces.length !== 1) {
        result = false;
    }
    else {
        result = true;
    }
    it("should add spaceId to xSpaces", function() {
        expect(result).toBe(true);
    });
});

describe("makeMove", function() {
    game = new Game();
    game.makeMove('#a1');
    if (game.turns !== 1) {
        result = false;
    }
    else {
        result = true;
    }
    it("should increment turns", function() {
        expect(result).toBe(true);
    });
});

describe("computerPlays", function() {
    game = new Game();
    game.makeMove('#a1');
    game.computerPlays();
    if ($('#b2').html() === 'o') {
        result = true;
    }
    else {
        result = false;
    }
    it("should place 'o'", function() {
        expect(result).toBe(true);
    });
});

describe("isWinner", function() {
    game = new Game();
    game.makeMove('a1');
    game.computerPlays();
    game.makeMove('b1');
    game.computerPlays();
    game.makeMove('a2');
    game.computerPlays();
    if (game.board.isWinner() === 'computer') {
        result = true;
    }
    else {
        result = false;
    }
    it("should recognize diagonal win", function() {
        expect(result).toBe(true);
    });
});

describe("isWinner", function() {
    game = new Game();
    game.makeMove('b2');
    game.computerPlays();
    game.makeMove('c3');
    game.computerPlays();
    game.makeMove('c2');
    game.computerPlays();
    if (game.board.isWinner() === 'computer') {
        result = true;
    }
    else {
        result = false;
    }
    it("should recognize row win", function() {
        expect(result).toBe(true);
    });
});

describe("isWinner", function() {
    game = new Game();
    game.makeMove('a2');
    game.computerPlays();
    game.makeMove('b2');
    game.computerPlays();
    game.makeMove('a3');
    game.computerPlays();
    game.makeMove('b3');
    game.computerPlays();
    if (game.board.isWinner() === 'computer') {
        result = true;
    }
    else {
        result = false;
    }
    it("should recognize column win", function() {
        expect(result).toBe(true);
    });
});