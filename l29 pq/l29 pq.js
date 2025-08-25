//if age is greater than 70 go to google
const candrive = (age)=>{
    return age>=18?true:false
}
let runagain = true
while(runagain){
    let age =prompt("enter your age ")
    age =Number.parseInt(age)
    if(age <0){
        console.error("invalid age")
        break
    }else if(age>70){
        location.href ="https://google.com"
        break
    }

if(candrive(age)){
    alert("you can drive")
}else{
    alert("you can not drive")
}
runagain = confirm("do you want to play again?")
}