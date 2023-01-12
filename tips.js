//use function as default parameter into a function
const isReq=()=>{
    throw new Error('input is required')
 }
 const res=(para=isReq())=>{
     console.log(`printing ${para}`);
 }
 console.log(res());
 console.log(res('good'));