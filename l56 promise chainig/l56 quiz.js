const loadScript = (src)=>{
    return new Promise((resolve,reject)=>{

    
    let script = document.createElement("script")
    script.type ="text/javascript"
    script.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(script)
    script.onload=()=>{
            resolve(1)
        }
        script.onerror=()=>{reject(0)}
    })
}
let p1=loadScript("http://localhost:3000/index.js")
p1.then((value)=>{
    console.log(value)
}).catch((Error)=>{
console.log("we are sorry for this")
})