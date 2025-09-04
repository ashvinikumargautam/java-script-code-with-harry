let arr = [3,5,7,8,9,10,11]
// let [a,b,c,d,...rest] =arr

//no need to do this 
//let a =arr[0]
//let b =arr[1]


// console.log(a,b,c,d ,rest)

// let [a, , ,...rest] = arr
// console.log(a,rest)

let  {a,b} = {a:1,b:10}
console.log(a,b)

//spread syntax

let arr1 =[3,4,5]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1))



let obj2 = {
    name:"ashvini",
    company:"company xyz",
    address: "XYZ"
}
console.log({...obj2,name:"john",company:"ABC"})
//mdn documents to explore more things