// function play(){
//     // var audio =new Audio("Alarm Sound Effect.mp3")
//     audio.play();
// }
// setTimeout(()=>{
//     play()
// },1000)
// play()
let p =document.getElementById("h2")

let x =  setInterval(()=>{
    let p = new Date()
    var times = `time is : ${p.getHours()}:${p.getMinutes()}:${p.getSeconds()}`
    var dates = `date is : ${p.getDate()}:${p.getMonth()}:${p.getFullYear()}`
    p.document.write = p.getTime()
},1000)
