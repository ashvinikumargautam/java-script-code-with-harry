// const sayHello =()=>{
// console.log("hello")
// }
// sayHello()

// const jayJwala =()=>console.log("jay")
// jayJwala()


// const sayHello =(name,greeting)=>{
// console.log("hello "+name+" "+greeting)
// }
// sayHello("vikash","Good afternoom")    //hello vikash good afternoon


const x={
    name:"vikash",
    role:"js Developer",
    exp:30,
    show:function(){
        console.log(`the name is ${this.name}`)
    }
} 
console.log(x.name+" "+x.role+" "+x.exp +" ")
x.show()