//swap letter

//method-1:
function swapCase1(str) {
    let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LOWER = "abcdefghijklmnopqrstuvwxyz";
    let result=[];
    for(let i=0; i<str.length; i++){
      if(UPPER.indexOf(str[i])!== -1){
          result.push(str[i].toLowerCase());
      }else if(LOWER.indexOf(str[i])!== -1){
          result.push(str[i].toUpperCase());
      }else{
          result.push(str[i]);
      }
    }
    return result.join("");
  }
  console.log(swapCase1("abCd5Rg")); //ABcD5rG
  
  
  //method-2:
  function swapCase2(str){
      let result="";
      for(let x of str){
          if(x.toLowerCase()==x){
              result+= x.toUpperCase();
          }
          if(x.toUpperCase()==x){
              result+= x.toLowerCase();
          }
      }
      return result;
  }
  console.log(swapCase2("i lIVE iN bANGLADESH")); //I  Live  In  Bangladesh
  
  //method 3: via reduce
  const swapCase3=([...str])=>str.reduce((acc, value)=>{
      value.toLowerCase()==value? acc+= value.toUpperCase(): acc+= value.toLowerCase();
      return acc; 
  },"");
  console.log(swapCase3("aBCD"));
  
  
  
  
  