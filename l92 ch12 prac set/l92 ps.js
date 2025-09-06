const a=async (text)=>{
return new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(text)
}, 2000);
})
}

(
async ()=>{
let text =await a("hello")
console.log(text)
text =await a("world")
console.log(text)
// await a(text)
})();

//q2

function sum(a,b,c){
    return a+b+c
}
let x=[1,2,3]
console.log(sum(...x))

