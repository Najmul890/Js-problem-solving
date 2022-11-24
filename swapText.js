//swap case via callback function
function swapText(text){
    return text.replace(/([a-z]+)|([A-Z]+)/g, function(match, char){
        return char? match.toUpperCase() : match.toLowerCase();
    })
}

console.log(swapText("aBcDeF"));

// swap via for loop
function swapText2(text){
    let newText="";
    for(let i=0; i<text.length; i++){
        if(text[i]===text[i].toLowerCase()){
            newText += text[i].toUpperCase();
        }else{
            newText += text[i].toLowerCase();
        }
    }
    return newText;
}

console.log(swapText2("aBcDeF"));