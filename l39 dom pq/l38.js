//q1
// let q1=document.querySelector("#home")
// q1.style.color="red"

//method 2

document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.backgroundColor="cyan"
});