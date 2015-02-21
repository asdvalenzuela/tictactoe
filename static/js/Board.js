function Board(blankSpaces,xSpaces,oSpaces) {
    this.blankSpaces = blankSpaces || ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
    this.xSpaces = xSpaces || [];
    this.oSpaces = oSpaces || [];
    this.rows_ = ['a', 'b', 'c'];
    this.columns = ['1', '2', '3'];
    this.clearBoard = function() {
        for (var i = 0; i < this.rows_.length; i++) {
            for (var j = 0; j < this.columns.length; j++) {
                var spaceId = '#' + this.rows_[i] + this.columns[j];
                $(spaceId).html('').css('pointer-events', 'auto');
            }
        }
    };
    this.preventBoardChanges = function() {
        for (var i = 0; i < this.rows_.length; i++) {
            for (var j = 0; j < this.columns.length; j++) {
                var spaceId = '#' + this.rows_[i] + this.columns[j];
                $(spaceId).css('pointer-events', 'none');
            }
        }
    };
}
    