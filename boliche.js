/*class Board {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
    }
    
}*/

var boardExample= [[4,5],[3,2],[10,0],[2,7],[3,5],[5,5],[5,4],[10,0],[1,9],[8,1]];


class Turn {
    constructor(board){
        this.board = board;
    }
    
    printBoard(board){
        var boardPrint = this.board;
        var points = [];
        let firstT;
        let secondT;
        for(let i=0; i<board.length;i++){
            firstT = boardPrint[i][0];
            secondT = boardPrint[i][1];
            points.push(firstT+secondT);
            
        }
        return boardPrint;
    }
}
const a = new Turn();
console.log(a.printBoard(boardExample));