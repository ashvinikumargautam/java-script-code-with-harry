//normal trchniqe

let a  =()=>{return new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve(456)
    },2000)
 })
 }
//  let f  = async()=>{
//      let  b = await a()
//      console.log(b)
//     let  c = await a()
//     console.log(b,c)
//     let  d = await a()
//     console.log(b,c,d)
//  }
//  f()

//IIFE

( async()=>{
     let  b = await a()
     console.log(b)
    let  c = await a()
    console.log(b,c)
    let  d = await a()
    console.log(b,c,d)
 })()