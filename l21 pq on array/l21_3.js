//filter elemnt which is divisible by zero

let a=[1,21,32,30,120,4550,7,12]
let b = a.filter((element)=>{
    // if(element%10==0){
    //     return element
    // }
    return element%10==0
})
console.log(b)

//create an array square of given numbers
let c=a.map((value)=>{
    return value*value
})
console.log(c)

//find factorial using reduce of a given numbers an array of first n natueal numbers

let a1=[1,2,3,4]
let fact = a1.reduce((ele1,ele2)=>{
    return ele1*ele2
})
console.log(fact)