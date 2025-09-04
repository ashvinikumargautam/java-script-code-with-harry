todo.innerHTML =" "
let x =document.getElementById("submit")
x.addEventListener("click",(e)=>{
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("TODO",JSON.stringify([titlec,descc]))
    console.log(e)
    todo.innerHTML += `
    <div style=" background-color: blue;">
        <h1 style="color: black">${titlec} </h1>
        <p style="color: white">${descc}</p>
    </div>
    `
})

let dlt =document.getElementById("deleteBtn")
dlt.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem("TODO")
    todo.innerHTML=" "
    console.log(e)
})

