let p1 = new Promise((resolve,reject)=>{
            setTimeout(() => {
               console.log("resolved after 2 seconds") 
            }, 2000);
            resolve(56)
        })
        p1.then((value)=>{
            console.log(value)
                setTimeout(()=>{
                   console.log("resolved in 2 sec first.then")
                },2000)
            }).then((value)=>{
                console.log("we are done")
                return 2
            }).then((value)=>{
                console.log("we are pakka done")
            })
        