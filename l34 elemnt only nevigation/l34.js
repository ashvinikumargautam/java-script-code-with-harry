const changebgcolor =()=>{
    document.body.firstElementChild.style.background = "red"
}
let b=document.body
console.log("first element child of b is ",b.firstChild) //text
console.log("first element child of b is ",b.firstElementChild) //nav
changebgcolor()