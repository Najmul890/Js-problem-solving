//array problem solving

//check an input is an array or not
// toString.call(input)=== "[object Array]" |_or_| use Object.prototype.toString.call(input)==="[object Array]"
function isArray(input){
    if(toString.call(input)=== "[object Array]"){
     return true
    }
    return false;
 }
 // console.log(isArray("w3school")); //false
 // console.log(isArray(['a','b','c'])); //true
 // console.log(isArray(1,2,3,4)); //false
 // console.log(isArray([1,2,3,4]));  //true
 
 //check an input is an array or not , method-2(Array.isArray(input))
 function isArray2(input){
   if(Array.isArray(input)){
     return true;
   }
   return false;
 }
 // console.log(isArray2(1,2,3)); //false
 // console.log(isArray2([1,2,3])); //true
 
 
 
 //check an input is an array or not , method-3(input instanceof Array)
 function isArray3(input){
   if(input instanceof Array){
     return true;
   }
   return false;
 }
 // console.log(isArray3(1,2,3)); //false
 // console.log(isArray3([1,2,3])); //true
 // console.log(isArray3(["a","b","c"])); //true
 
 
 
 //check an input is an array or not , method-4(input.constructor===Array)
 function isArray3(input){
   if(input.constructor === Array){
     return true;
   }
   return false;
 }
 console.log(isArray3(1,2,3)); //false
 console.log(isArray3([1,2,3])); //true
 console.log(isArray3(["a","b","c"])); //true