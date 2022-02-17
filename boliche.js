var boardExample = [];
var iValidate = 0;
for (let i = 0; i <=9; i++) {
    let iNum1 = 0;
    let iNum2 = 0;
    let arrTemp = [];
    do{
        iNum1 = Math.round(Math.random()*10);
        iNum2 = Math.round(Math.random()*10);
        iValidate = iNum1+iNum2;
    }while(iValidate>10);
    arrTemp.push(iNum1);
    arrTemp.push(iNum2);
    boardExample.push(arrTemp);
}
//boardExample = [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[9,1]];

class Turn {
    constructor(board){
        this.board = board;
    }
    
    printBoard(){ // Esta función es más larga de lo permitido, por lo que da una puntuación de C :(
        let firstT  = 0, secondT = 0, iTemp   = 0, iTotal  = 0, iToString = 0, sString1 = '', sTotales = '', sString2 = '', isSpare = false, arr = this.board, extraPoint,extraPointTwo;
        this.board.forEach(function(value,i){
            firstT  = value[0]; 
            secondT = value[1]; 
            iTotal  = firstT+secondT; 
            iTotal  = (iTemp!=0 ? iTotal+iTemp : iTotal);
            if(firstT+secondT==10 && firstT!=10){
                if(i == 9){
                    isSpare = true;
                    extraPoint = Math.round(Math.random()*10);
                    iTotal=iTotal + extraPoint;
                }else{
                    iTotal  = iTotal + arr?.[i+1]?.[0];
                }
                secondT = '/'; // '/' = spare
            }else if(firstT==10){ 
                if(i == 9){
                    extraPoint = Math.round(Math.random()*10);
                    extraPointTwo = Math.round(Math.random()*10);
                    iTotal = iTotal+extraPoint+extraPointTwo;
                }else{
                    iTotal  = iTotal + arr?.[i+1]?.[0];
                    iTotal  = iTotal + arr?.[i+1]?.[1];
                }
                secondT = '*'; // '*' = pleno o chusa
            } 
            if(secondT=='*'){ // Para alinear el primer renglón
                if(i==9){
                    sString1 += firstT+' '+secondT+' '+extraPoint+' '+extraPointTwo+' |';
                }
                else{
                    sString1 += firstT+' '+secondT+'|';
                }
            }else{ 
                if( i ==9 ){ //0,1,2,3,4,5,6,7,8,(9)
                    if(isSpare){
                        sString1 += firstT+' '+secondT+' '+extraPoint+' |'; 
                    }else{
                        sString1 += firstT+' '+secondT+' |'; 
                    }
                }
                else{
                    sString1 += firstT+' '+secondT+' |'; 
                }
            }
            iToString = iTotal;
            iToString = iToString.toString().length;
            if(iToString==2){ // Para alinear el segundo renglón
                sString2 += iTotal+'  |';
            }else if(iToString==3){ 
                if(i==9){
                    sString2 += iTotal+'      |'; 
                }else{
                    sString2 += iTotal+' |'; 
                } 
            }else{
                sString2 += iTotal+'   |'; 
            }
            sTotales = sString1+'\n'+sString2;
            iTemp = iTotal;
            //console.log(sTotales);
        });
        return sTotales;
    }  
}
console.log(boardExample);

const a = new Turn(boardExample);
console.log(a.printBoard());

module.exports = Turn;