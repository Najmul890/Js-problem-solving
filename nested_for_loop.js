// problems for nested for loop

//problem-1:
for(let i=1; i<=3; i++){
    document.write(i+"<br>");
    for(let j=1; j<=i; j++){
        document.write(j+"<br>")
    }
    document.write("<br>")
}

//problem-2: print tables
for(let i=1; i<=5; i++){
    for(let j=1; j<=10; j++){
        document.write(i+"*"+j+"="+i*j+"<br>")
        
    }
    document.write("<br>")
}


//problem-3: print triangle of a star
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write("*")
    }
    document.write("<br>")
}

//problem-4: print triangle of numbers
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write(j)
    }
    document.write("<br>")
}

//problem-5: print right triangle pattern of numbers
let k=1;
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write(k)
    }
    document.write("<br>")
    k++;
}

//problem-6: reverse triangle of numbers positive way
for(let i=5; i>0; i--){
    for(let j=1; j<=i ;j++){
        document.write(j+" ")
    }
    document.write("<br>")
}

//problem-7: reverse triangle of numbers negative way
for(let i=5; i>0; i--){
    for(let j=i; j>0 ;j--){
        document.write(j+" ")
    }
    document.write("<br>")
}

//problem-8: alphabet pattern 1
for(let i=65; i<=69; i++){
    for(let j=65; j<=i; j++){
        document.write(String.fromCharCode(j));
    }
    document.write("<br>")
}

// //problem-9: alphabet pattern 2
for(let i=69; i>=65; i--){
    for(let j=65; j<=i; j++){
        document.write(String.fromCharCode(j));
    }
    document.write("<br>")
}

//problem-10: alphabet pattern 3
for(let i=69; i>=65; i--){
    for(let j=i; j>=65; j--){
        document.write(String.fromCharCode(j));
    }
    document.write("<br>")
}
