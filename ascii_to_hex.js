//ascii to hexadecimal
function asciiToHexadecimal(ascii){
    let arr=[];
    for(let i=0; i<ascii.length; i++){
        let hex= Number(ascii.charCodeAt(i).toString(16));
        arr.push(hex);
    }
    return arr.join("");
}
console.log((asciiToHexadecimal("12")));
