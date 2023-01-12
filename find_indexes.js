//find indexes
function findIndexes(arr, item){
    const indexes=[];
    arr.forEach((value, index)=>{
        item===value? indexes.push(index): null;
    })
    return indexes;
}
console.log(findIndexes([2,-5,1,3,5,3,6,8,3,1,3],3));
console.log(findIndexes(['apple','orange','banana','orange','guava'],'orange'));

//find index via for loop
function findIndexes2(arr, item){
    const indexes=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]===item){
            indexes.push(i);
        }
    }
    return indexes;
}
console.log(findIndexes2(['apple','orange','banana','orange','guava'],'orange'));
