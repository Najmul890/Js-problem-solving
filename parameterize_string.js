//parameterize a string
function parameterizeString(string){
    return string.replaceAll(" ","-");
}
console.log(parameterizeString("We live in Bangladesh"));
console.log(parameterizeString("Boys go to school"));