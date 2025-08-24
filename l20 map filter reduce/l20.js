let a =[12,3,4,5,6,9]
a.forEach((element) => {
    console.log(element*element)
});

console.log("\n")
//map 
let b = a.map((value,index,Array)=>{
    console.log(value,index,Array)
    return value+index
}) 
console.log(b)

console.log("\n")
//filter

let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{
    return a>10 
})
console.log(a2) 
console.log("\n")
//reduce
let arr3 = [1,2,3,4]
let newarr3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)  //10