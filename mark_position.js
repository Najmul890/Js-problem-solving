//mark the position

function humanizeNumber(number){
    if(typeof(number)===undefined) return;
    if(number%100>=11 && number%100<=13){
        return number+"th";
    }
    switch(number%10){
        case 1: return number+"st";
        case 2: return number+"nd";
        case 3: return number+"rd";
    }
    
    return number+"th";
}

function getResult(colors){
    for(let x in colors){
         console.log(`${humanizeNumber(+x+1)} choice is ${colors[x]}`);
    }
}
getResult(["red","green","yellow","black","white"]);