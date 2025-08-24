alert("enter the value of input")
let input =prompt("please enter somthing","this is default value")
input =Number.parseInt(input)
console.log(input)
document.write(input) 

let userconfirm = confirm("confirm to delete this?")
if(userconfirm){
    console.log("item deleted")
}else{
    console.log("delete cancelled")
}