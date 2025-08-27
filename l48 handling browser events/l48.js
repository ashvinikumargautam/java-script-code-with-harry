let b=document.getElementById("btn")
let x=function(e){  //e ki jgh kuch b likh skte hai
    console.log(e.target)
    console.log(e)
    // alert("hello world 1 !")

}
let y = function(event){
    // alert("hello world 2 !")
    console.log(event.type,event.clientX,event.clientY)
}
b.addEventListener('click',x)

b.addEventListener('click',y)

let a =prompt('what is your favorite number');
if(a=="2"){
    b.removeEventListener('click',x)
}