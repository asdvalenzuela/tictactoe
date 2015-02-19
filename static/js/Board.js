function Board(blankSpaces,xSpaces,oSpaces) {
    this.blankSpaces = blankSpaces || ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
    this.xSpaces = xSpaces || [];
    this.oSpaces = oSpaces || [];
    this.clearBoard = function() {
        $('#a1').html('').css('pointer-events', 'auto');
        $('#a2').html('').css('pointer-events', 'auto');
        $('#a3').html('').css('pointer-events', 'auto');
        $('#b1').html('').css('pointer-events', 'auto');
        $('#b2').html('').css('pointer-events', 'auto');
        $('#b3').html('').css('pointer-events', 'auto');
        $('#c1').html('').css('pointer-events', 'auto');
        $('#c2').html('').css('pointer-events', 'auto');
        $('#c3').html('').css('pointer-events', 'auto');
    };
    this.isWinner = function() {
        if (this.xSpaces.indexOf('a1') !== -1 && this.xSpaces.indexOf('a2') !== -1 && this.xSpaces.indexOf('a3') !== -1 ||
            this.xSpaces.indexOf('b1') !== -1 && this.xSpaces.indexOf('b2') !== -1 && this.xSpaces.indexOf('b3') !== -1 ||
            this.xSpaces.indexOf('c1') !== -1 && this.xSpaces.indexOf('c2') !== -1 && this.xSpaces.indexOf('c3') !== -1 ||
            this.xSpaces.indexOf('a1') !== -1 && this.xSpaces.indexOf('b1') !== -1 && this.xSpaces.indexOf('c1') !== -1 ||
            this.xSpaces.indexOf('a2') !== -1 && this.xSpaces.indexOf('b2') !== -1 && this.xSpaces.indexOf('c2') !== -1 ||
            this.xSpaces.indexOf('a3') !== -1 && this.xSpaces.indexOf('b3') !== -1 && this.xSpaces.indexOf('c3') !== -1 ||
            this.xSpaces.indexOf('a1') !== -1 && this.xSpaces.indexOf('b2') !== -1 && this.xSpaces.indexOf('c3') !== -1 ||
            this.xSpaces.indexOf('a3') !== -1 && this.xSpaces.indexOf('b2') !== -1 && this.xSpaces.indexOf('c1') !== -1) {
            return 'human';
        }
        else if (this.oSpaces.indexOf('a1') !== -1 && this.oSpaces.indexOf('a2') !== -1 && this.oSpaces.indexOf('a3') !== -1 ||
            this.oSpaces.indexOf('b1') !== -1 && this.oSpaces.indexOf('b2') !== -1 && this.oSpaces.indexOf('b3') !== -1 ||
            this.oSpaces.indexOf('c1') !== -1 && this.oSpaces.indexOf('c2') !== -1 && this.oSpaces.indexOf('c3') !== -1 ||
            this.oSpaces.indexOf('a1') !== -1 && this.oSpaces.indexOf('b1') !== -1 && this.oSpaces.indexOf('c1') !== -1 ||
            this.oSpaces.indexOf('a2') !== -1 && this.oSpaces.indexOf('b2') !== -1 && this.oSpaces.indexOf('c2') !== -1 ||
            this.oSpaces.indexOf('a3') !== -1 && this.oSpaces.indexOf('b3') !== -1 && this.oSpaces.indexOf('c3') !== -1 ||
            this.oSpaces.indexOf('a1') !== -1 && this.oSpaces.indexOf('b2') !== -1 && this.oSpaces.indexOf('c3') !== -1 ||
            this.oSpaces.indexOf('a3') !== -1 && this.oSpaces.indexOf('b2') !== -1 && this.oSpaces.indexOf('c1') !== -1) {
            return 'computer';
        }
        else {
            return false;
        }
    };
    this.preventBoardChanges = function() {
        $('#a1').css('pointer-events', 'none');
        $('#a2').css('pointer-events', 'none');
        $('#a3').css('pointer-events', 'none');
        $('#b1').css('pointer-events', 'none');
        $('#b2').css('pointer-events', 'none');
        $('#b3').css('pointer-events', 'none');
        $('#c1').css('pointer-events', 'none');
        $('#c2').css('pointer-events', 'none');
        $('#c3').css('pointer-events', 'none');
    };
}
    