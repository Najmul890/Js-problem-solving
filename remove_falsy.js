//remove falsy value
function remove_falsy(arr){
    const result=[];
    for(let i=0; i<arr.length; i++){
      if(arr[i] || arr[i]===0 ) result.push(arr[i]);
    }
    return result;
  }
  // console.log(remove_falsy([null,0,1,2,'',false,undefined,3,NaN]));
  
  //method-2: 
  function remove_falsy2(arr){
    return arr.filter(Boolean);
  }
  // console.log(remove_falsy2([null,0,1,2,'',false,undefined,3,NaN]));
  
  //method-3:
  function remove_falsy3(arr){
    return arr.filter((value)=>{
      return value || value===0;
    })
  }
  console.log(remove_falsy3([null,0,1,2,'',false,undefined,3,NaN]));
  
  