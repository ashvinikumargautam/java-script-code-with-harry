class employee{
    constructor(name){
        console.log("employees constructor is here")
        this.name  = name
    }
    login(){
        console.log("Employee has loged in...")
    }
    logout(){
        console.log("Employee has loged out...")
    }
    requestLeave(leaves){
        console.log(`Employee has requested ${leaves} leaves...`)
    }
}

class Programmar extends employee {
    constructor(name){  
        console.log("this is the newely written constructor")
        super(name)
        this.name  = name
    }
    requestCofee(x){
        console.log(`${this.name} has requested ${x} coffees`)
    }
    requestLeave(leaves){  //overridie employee
        super.requestLeave(4)
        console.log(`one extra leave is granted to ${this.name}`)
        // console.log(`Employee has requested ${leaves+1} leaves(one extra)...`)
         
    }
}


let f = new Programmar("harry")
f.login()
f.requestLeave()
f.requestCofee(10)