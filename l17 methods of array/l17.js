//array methods
let num =[1,2,3,34,5]
let b = num.toString() //b is now a string
console.log(num,num.length)  //array
console.log(typeof num)  //array
console.log(b) //string
console.log(typeof b) //string

let c =num.join("_")
console.log(c)  
console.log(typeof c)  
let r = num.pop()
console.log(num,r,num.length)
let p = num.push(69)
console.log(num,p,num.length)

let s =num.unshift(72) //return new array length
console.log(s,num)
let t =num.shift() //return elemrnt which is reoved
console.log(t,num)

delete num[3] //does not affect length of array
console.log(num)

