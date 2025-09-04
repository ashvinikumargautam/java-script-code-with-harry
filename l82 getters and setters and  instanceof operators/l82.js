class animal {
    constructor(name){
        this._name = name
    }
    fly(){
        console.log(`${this.name} ud rha hai`)
    }
    get name(){
        return this._name //kiuki directly name nhi lga skte
    }
    set name(newName){
        return this._name =newName
    }
}

 class rabit extends animal{
    eatcarrot(){
        console.log("eat carrot")
    }
 }
let a =new animal("ashvinni")
let b = new rabit()
a.fly()
console.log(a.name)
a.name = "jack"
console.log(a.name)

console.log(a instanceof animal)
console.log(a instanceof rabit)

console.log(b instanceof rabit)
console.log(b instanceof animal)