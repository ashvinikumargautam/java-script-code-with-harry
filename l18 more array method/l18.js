let num = [1,2,3,4,5,611,22,33,43,53,31,12]
let num_more = [11,12,13,14,15,16,17,18,19]
let num_more_more=["akash",111,12222]
console.log(num.sort())
let new_array = num.concat(num_more,num_more_more)
console.log(new_array)

let a3 = [1,12,3,5,166,19]
console.log(a3.sort())

let compare =(a,b)=>{
    return a-b
}
console.log(a3.sort(compare))

//splice
let a4 = [1,21,2,43,54,6]
 console.log(a4.splice(2,2,1010,1011,1012)) //returns delated array
 console.log(a4)
 
let a5=[1,2,3,4,5,6]
console.log(a5.slice(2,4))
console.log(a5)
