class employee{
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
    requestCofee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeave(leaves){  //overridie employee
        super.requestLeave(4)
        console.log("one extra leave is granted")
        // console.log(`Employee has requested ${leaves+1} leaves(one extra)...`)
         
    }
}

let e = new employee()
e.login()
e.requestLeave(3)

let f = new Programmar()
f.login()
f.requestLeave()
// f.requestCofee(10)