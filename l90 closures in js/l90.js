
message = "good global"
function  hello1(){

    message ="good morning"
    {
    let  message = "good afternoon"
    console.log("hello 1 "+message)
    }
    let c= function hello2(){
        console.log(" i am C "+message)
    }
    return c
}
console.log(message)
c = hello1()
c()
