// {
//     // let a = 9;        //local scope
//     var a = 8;    //global scope
// }
// console.log(a)

let  p =9
function ax(){
    let a = 8;
    console.log(a)
    console.log(p)
}
ax()
// console.log(a)   //error becouse a is only in the function