// add a word in a specific position of a text/sentence
function insertWord(text, word, position){
    if(typeof(position)===undefined){
        position=0;
    }
    if(typeof(word)===undefined){
        word="";
    }
    return text.slice(0,position)+" "+word+text.slice(position);
}
console.log(insertWord("I am reading a book","story",14));
console.log(insertWord("I live in Bangladesh","Dhaka",9));
