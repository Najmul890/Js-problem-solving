//camelize text; like, mangojuice===> mangoJuice
function camelizeString(text){
    return text.replace(/\W+(.)/g, function(match, char){
        return char.toUpperCase();
    })
}
console.log(camelizeString("mango juice"));
console.log(camelizeString("mango Juice"));

//camelize string via map
function camelizeString2(string){
    let arr= string.split(" ");
    return arr.map(function(words){
        return words.charAt(0).toLowerCase()+ words.slice(1);
    }).join("");
}
console.log(camelizeString2("mango juice"));