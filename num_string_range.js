// function to fill an array with values (numeric, string with one character) on supplied bounds.
function num_string_range(start, end, step){
    const result=[];
    if((typeof step==undefined || typeof step=='string' || step===0)|| (typeof start==undefined || typeof end==undefined) || (typeof start!=typeof end))
    return false;
    if(start>end){
        step=-step;
    }
    if(typeof start=='number'){
        while(step>0? start<=end : start>=end){
            result.push(start);
            start+=step;
        }
    }else if(typeof start=='string'){
        if(start.length!==1 || end.length!==1){
            throw TypeError('strings with 1 character are allowed');
        }
        start=start.charCodeAt(0);
        end=end.charCodeAt(0);
        while(step>0 ? start<=end : start>=end){
            result.push(String.fromCharCode(start));
            start+=step;
        }
    }else{
        throw TypeError('only numbers and strings are allowed')
    }
    return result;
}
console.log(num_string_range(1,10,3));
console.log(num_string_range('a','z',5));

//method-2: via for loop
function num_string_range2(start, end, step){
    const result=[];
    if(typeof start=='number' && typeof end=='number' && typeof step=='number'){
        for(let i=start; i<end; i+=step){
            result.push(i);
        }
    }else if(typeof start=='string' && typeof end=='string' && typeof step=='number'){
        for(let i=start.charCodeAt(0); i<end.charCodeAt(0); i+=step){
            result.push(String.fromCharCode(i));
        }
    }else{
        throw TypeError('not a valid input');
    }
    return result;
}
console.log(num_string_range2(1,10,2));
console.log(num_string_range2('a','z',5));