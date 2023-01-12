//sum of squares
//method-1: for loop
function sumOfSquares(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+= Math.pow(arr[i],2);
    }
    return sum;
}
console.log(sumOfSquares([1,2,3,4]));

//method-2: via reduce
function sumOfSquares2(arr){
    const sum= arr.reduce((acc, value)=>{
        return acc+= Math.pow(value,2);
    },0);
    return sum;
}
console.log(sumOfSquares2([1,2,3,4]));