//remove an element from an array
function remove_an_element(arr, element){
    let index= arr.indexOf(element);
    if(index>-1){
        arr.splice(index,1);
    }
    return arr;
}
console.log(remove_an_element([1,3,5,6,8],3));
console.log(remove_an_element(['to','go','no','so'],'no'));