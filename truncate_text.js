//truncate text
function truncateText(text,length){
    if(length==null){
     length=20;
    }
    if(text.length>length){
     return text.slice(0,length)+" "+"...";
    }
 }
 console.log(truncateText("We go to Sylhet",8));
 console.log(truncateText("He has been studying for 6 hours"));

 //truncate word
 function truncateWord(text, numberOfWords){
    return text.split(" ").splice(0,numberOfWords).join(" ");
 }
 console.log(truncateWord("we go to school",3));