class human{
    constructor(name,favfood){
        this.name = name
        this.favf = favfood
    }
    walk(){
        console.log(this.name+" human is walking")
    }
}
class students extends human{
    walk(){
        console.log(this.name +" student is walking")
    }
}

let o =new students("akash","bhindi")
o.walk()
console.log(o instanceof human)