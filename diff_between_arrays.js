//find difference between arrays
function diff_bet_arrays(arr1, arr2){
    arr1= arr1.toString().split(',').map(Number);
    arr2= arr2.toString().split(',').map(Number);
    const result=[];
    for(let value of arr1){
      if(arr2.indexOf(value)==-1){
        result.push(value);
      }
    }
    for(let value of arr2){
      if(arr1.indexOf(value)==-1){
        result.push(value);
      }
    }
    return result;
  }
  // console.log(diff_bet_arrays([1,7,[3,[4]]],[2,3,6]));
  
  
  //method-2: via filter method
  function diff_bet_arrays2(...arrays){
    const flattenArr= arrays.flat(Infinity);
    const result= flattenArr.filter((value)=>{
      return flattenArr.indexOf(value)===flattenArr.lastIndexOf(value);
    })
    return result;
  }
  // console.log(diff_bet_arrays2([1,2,[3,[4]]],[2,3,6]));
  
  //method-3: via for loop
  function diff_bet_arrays3(arr1, arr2){
    const length= arr1.length>=arr2.length ? arr1.length : arr2.length;
    const result=[];
    for(let i=0; i<=length; i++){
      if(arr1.indexOf(arr2[i])==-1 && arr2[i]!==undefined) result.push(arr2[i]);
      if(arr2.indexOf(arr1[i])==-1 && arr1[i]!== undefined) result.push(arr1[i]);
    }
    return result;
  }
  // console.log(diff_bet_arrays3([1,2,3],[2,3,4]));
  
  //method-4: via forEach
  function diff_bet_arrays4(arr1, arr2){
    const result=[];
    arr1.forEach((value, index)=>{
      if(!arr2.includes(value)) result.push(value);
    })
    arr2.forEach((value, index)=>{
      if(!arr1.includes(value)) result.push(value);
    })
    return result;
  }
//   console.log(diff_bet_arrays4([1,2,3],[2,3,4]));
  