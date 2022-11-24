function findGCD(x,y){
    if((typeof x!=="number") || (typeof y!=="number"))
    return "wrong input";
    x= Math.abs(x);
    y= Math.abs(y);
    while(y){
        let t=y;
        console.log("t is",t);
        y=x % y;
        console.log("y is",y)
        x= t;
        console.log("x is",x);
    }
    return x;
}
console.log(findGCD(15,21));
//console.log(findGCD(3,5));