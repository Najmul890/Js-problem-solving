//get random number between two values
function getRandom(min, max){
    if(min==null && max==null) return 0;
    if(max==null){
        max=min;
        min=0;
    }
    return Math.floor(Math.random()*(max-min+1))+ min;
}
console.log(getRandom(1,6));
console.log(getRandom(2));

//via round
function rand(start=0, end=0) {
    return Math.round(Math.random() * (end - start) + start)
}

console.log(rand(1,10))
