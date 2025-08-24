let a1 = [1,2,3,4,5,6]
for(let i =0;i<a1.length;i++){
    console.log(a1[i])
}
console.log("\n")
a1.forEach((Element)=>{
    console.log(Element*Element)
})

console.log("\n")
//Array.from
let name  = "ashvini"
let arr = Array.from(name)
console.log(arr)

console.log("\n")
//for...of   
for(let i of a1){
    console.log("print element using for of loop : "+ i) //prints elements of array
}

console.log("\n")
//for in 
for(let i in a1){
    console.log("print element using for in loop : "+a1[i])
}

console.log("\n")