class animal {
    constructor(name){
        this.name = animal.capitalize(name)
    }
    walk(){
        console.log("animal "+animal.capitalize(this.name)+" is walking ")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.length)
    }
    
}
j= new animal("jack")
j.walk()