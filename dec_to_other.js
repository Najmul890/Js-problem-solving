//decimal to all
function decimalToOther(n, base){
    switch(base){
        case 'B': return parseInt(n).toString(2);
        case 'O': return parseInt(n).toString(8);
        case 'H': return parseInt(n).toString(16);
        default: return "wrong input";
    }
}
console.log(decimalToOther(253,'B'));
console.log(decimalToOther(253,'O'));
console.log(decimalToOther(253,'H'));

