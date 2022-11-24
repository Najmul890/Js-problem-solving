//find max number
function findMax(numbers){
    let max=numbers[0];
    for(let i=0; i<numbers.length; i++){
       if(numbers[i]>max){
           max=numbers[i]
       }
    }
    return max;
}
console.log(findMax([112,5,-45,23,0,30]))

//system 2
function findMax2(numbers){
   return numbers.reduce(function(a,b){
       return Math.max(a,b);
   })
}
console.log(findMax2([112,5,-45,23,0,30]));

//system 3
function findMax3(numbers){
   return Math.max(...numbers);
}
console.log(findMax3([112,5,-45,23,0,30]));

//system 4
function findMax4(input){
   if(toString.call(input) !== "[object Array]"){
       return "wrong input"
   }
   return Math.max.apply(null,input);
}
console.log(findMax4([112,5,-45,23,0,30]));


