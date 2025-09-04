class complexNumber{
    constructor(real,img){  //q1
        this.real = real
        this.img = img
    }
    printNum(){
        console.log(`complex number is :${this.real} + ${this.img}i`)
    }

    add(num){  //q2
        this.real = this.real+num.real
        this.img = this.img+num.img
        console.log(`sum of complex number is :${this.real} + ${this.img}i`)

    }
    get real(){
        return this._real
    }
    get img(){
        return this._img
    }

    set real(newReal){
        this._real=newReal
    }
    set img(newImg){
        this._img=newImg
    }
}
 //q1
let number1= new complexNumber(2,3)
number1.real = 10
number1.img=12
let number2= new complexNumber(4,6)
number1.printNum()
number2.printNum()

//q2
number1.add(number2)
console.log(number1.real,number1.img)