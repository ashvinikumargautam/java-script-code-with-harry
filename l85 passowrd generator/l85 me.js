class password{
    constructor(){
        console.log("welcome to password genetater")
        this.pass=""
        
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "12345677890"
        let spercial = "!@#$%^&*()_+{}:<>?|="

        if(len<3){
            console.log("your password should be 3 charecter long")
        }else{
            let i = 0
            while(i<len){
                this.pass+=chars[Math.floor(Math.random()*chars.length)]
                this.pass+=numbers[Math.floor(Math.random()*numbers.length)]
                this.pass+=spercial[Math.floor(Math.random()*spercial.length)]
                i+=3
            }
            this.pass=this.pass.substring(0,len)
            return this.pass
        }
    }
   
}

let p =new password()
console.log(p.generatePassword(10))
