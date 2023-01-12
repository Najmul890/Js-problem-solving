//print 2D array
//method-1:
function print2DArr(arr){
    for(let i in arr){
        console.log("row "+(parseInt(i)+1));
        for(let j in arr[i]){
            console.log(arr[i][j]);
        }
    }
}
print2DArr([[1,2,3],[4,5,6],[7,8,9]]);

//method-2:via map
function print2DArr2(arr){
    arr.map((data, index)=>{
        console.log(`row ${index+1}`);
        data.map((item, index)=>{
            console.log(item);
        })
    })
}
print2DArr2([[1,2,3],[4,5,6],[7,8,9,10]]);

//method-3:via forEach
function print2DArr3(arr){
    arr.forEach((data, index)=>{
        console.log(`row ${index+1}`);
        data.forEach((item, index)=>{
            console.log(item);
        })
    })
}
print2DArr3([[1,2,3],[4,5,6],[7,8,9,11]]);

