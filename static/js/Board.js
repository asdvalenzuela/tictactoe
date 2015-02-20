function Board(blankSpaces,xSpaces,oSpaces) {
    this.blankSpaces = blankSpaces || ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
    this.xSpaces = xSpaces || [];
    this.oSpaces = oSpaces || [];
    this.rows_ = ['a', 'b', 'c'];
    this.columns = ['1', '2', '3'];
    this.clearBoard = function() {
        for (var i = 0; i < this.rows_.length; i++) {
            for (var j = 0; j < this.columns.length; j++) {
                spaceId = '#' + this.rows_[i] + this.columns[j];
                $(spaceId).html('').css('pointer-events', 'auto');
            }
        }
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
        for (var i = 0; i < this.rows_.length; i++) {
            for (var j = 0; j < this.columns.length; j++) {
                spaceId = '#' + this.rows_[i] + this.columns[j];
                $(spaceId).css('pointer-events', 'none');
            }
        }
    };
}
    