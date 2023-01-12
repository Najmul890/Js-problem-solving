//find longest common substring
//method-1:via while loop
function find_lon_common_substring(arr){
    const sortedArr=arr.concat().sort(); //concat(); to copy the array
    let firstEl=sortedArr[0],
        lastEl=sortedArr[sortedArr.length-1],
        length=firstEl.length,
        i=0;
    while(i<length && firstEl.charAt(i)===lastEl.charAt(i)) i++;
    return firstEl.substring(0,i);    
}
// console.log(find_lon_common_substring(['goal','goes','google']));
// console.log(find_lon_common_substring(['google','good','goal']));


//for only 2 elements 
function commonSub(strings) {
    const min = Math.min(...strings.map(str => str.length));
    let commonSub;
    for (let i = 1; i <= min; i++) {
        const [sub1, sub2] = strings.map(str => str.substring(0, i));
        if (sub1 !== sub2) break;
        commonSub = sub1;
    }
    return commonSub || null;
}
const strings = ['goo', 'google'];
// console.log(commonSub(strings)); // goo



