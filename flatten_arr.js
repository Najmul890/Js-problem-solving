//flatten array, method:1
function flattenArr1(arr){
    const result=[];
    const flatten= arr.toString().split(',');
    for(let i=0; i<flatten.length; i++){
          const element=Number(flatten[i]);
          result.push(element);
    }
    return result;
  }
  // console.log(flattenArr1([1,[2,[3]],[4]]));
  
  //method-2:
  function flattenArr2(arr) {
    const result=[];
    const flattened = arr.toString().split(',');
    flattened.forEach((value)=>{
      const res= Number(value);
      result.push(res);
    })
    return result;
  }
  // console.log(flattenArr2([1,[2,[3]],[4]]));
  
  
  //via flat method
  function flattenArr3(arr, shallow=false){
     return arr.flat(shallow? 1 : Infinity);
  }
  
  console.log(flattenArr3([1, [2], [3, [[4]]],[5,6]]));
  console.log(flattenArr3([1, [2], [3, [[4]]],[5,6]], true));
  
  
  
  