//create snake water gun agame 
// the game should ask you to enter S,W or G. the computer should be able to randomly
// generate s,w and g and declare win or loss using alert
//use alert,prompt and confirm wherever requird!

let user = prompt("S,W and G")
let cpuI=Math.floor(Math.random()*3);
let cpu = ["S","W","G"][cpuI]
// document.write("cpu is : "+cpu)
const match =(cpu,user)=>{
if(cpu===user){
    return "NOBODY,match is tied"
}else if(cpu==='S' && user==='W'){
    return "cpu"
}else if(cpu==='S' && user==='G'){
    return "user"
}else if(cpu==='G' && user==='W'){
    return "user"
}else if(cpu==='G' && user==='S'){
    return "cpu"
}else if(cpu==='W' && user==='S'){
    return "user"
}else if(cpu==='W' && user==='G'){
    return "cpu"
}
}

let result=match(cpu,user)
// document.write("user is : "+user)
document.write(`cpu : ${cpu} <br> user : ${user} <br> Winner is : ${result}`)