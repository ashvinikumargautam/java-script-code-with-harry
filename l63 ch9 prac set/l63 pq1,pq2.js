 const loadScript = async (src)=>{
            return new Promise((resolve,reject)=>{
                
                let script = document.createElement("script")
                script.src = src
                script.onload = ()=>{
                    resolve(src+": done succesfully")
                }
                document.head.append(script)
            })
        }

//pq1

    let a = loadScript("https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js")
        a.then((value)=>{
            console.log(value)
        })

//pq2

        // const main =async ()=>{
        //     console.log(new Date().getMilliseconds())
        //     let a = await loadScript("https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js")
        //     cosnole.log(a)
        //     console.log(new Date())
        // }
        // main()