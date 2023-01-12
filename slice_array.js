//return first element of an array
function sliceArray(array, n){
    if(array==null){
        return void 0; //undefined
    }
    if(n==null) return array[0];
    if(n<0) return [];
    return array.slice(0,n)
}
console.log(sliceArray([1,2,3],2));

//slice from last element of an array
function sliceLastEl(arr,n){
    if(arr==null) return void 0;
    if(n==null) return arr.slice(arr.length-1);
    if(n>arr.length) return "wrong input";
    return arr.slice(arr.length-n,arr.length);
}
console.log(sliceLastEl([1,2,3,4,5,6]));
console.log(sliceLastEl([1,2,3,4,5,6],2));