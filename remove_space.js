function removeSpace(text){
    return text.replace(/^\s+|\s+$/g,"");
}
console.log(removeSpace(" go  ").length);
console.log((" go ").length);