/* eslint-disable no-undef */
const Turn = require('../boliche'); 

describe('Turn ', () =>{
    var boardExample = [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8]];
    const turn = new Turn(boardExample);

    test('longitud de matriz',()=>{ 
        expect(turn.board.length).toBe(10);
    });

    test('defines printBoard', () => {
        expect(turn.printBoard).not.toBeNull();
    });
    
    // método imprimir

    // aleatorizar
});
