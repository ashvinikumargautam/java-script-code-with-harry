// alert("hello")
let a=setTimeout(function() {
    alert("I am inside set timeout")
}, 5000);
clearTimeout(a);

// let i =0
// let b =setInterval(function() {
    // alert("I am inside setinterval")
    // i=i+1;
    // console.log(i)
// }, 200);
// clearInterval(b)

const sum =(a,b,c)=>{
    console.log("Yes i am running : "+(a+b+c))
    
}
setTimeout(sum,1000,1,2,7)

