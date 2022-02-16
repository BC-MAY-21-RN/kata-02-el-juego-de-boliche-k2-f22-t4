var boardExample = [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8]];

class Turn {
    constructor(board){
        this.board = board;
    }
    
    printBoard(){
        let firstT  = 0, secondT = 0, iTemp   = 0, iTotal  = 0, iToString = 0, sString1 = '', sTotales = '', sString2 = '';
        this.board.forEach(function(value){
            firstT = value[0]; 
            secondT = value[1];
            iTotal = firstT+secondT;
            iTotal =(iTemp!=0 ? iTotal+iTemp : iTotal);
            if(firstT+secondT==10 && firstT!=10){
                secondT = '/'; // '/' = spare
            }else if(firstT==10){
                secondT = '*'; // '*' = pleno o chusa
            }
            if(secondT=='*'){ // Para alinear el primer renglón
                sString1 += firstT+' '+secondT+'|';
            }else{
                sString1 += firstT+' '+secondT+' |';
            }
            iToString = iTotal;
            iToString = iToString.toString().length;
            if(iToString==2){ // Para alinear el segundo renglón
                sString2 += iTotal+'  |';
            }else{
                sString2 += iTotal+'   |';
            }
            sTotales = sString1+'\n'+sString2;
            iTemp = iTotal;
            console.log(sTotales);
        });
        return sTotales;
    }  

}
const a = new Turn(boardExample);
console.log(a.printBoard());