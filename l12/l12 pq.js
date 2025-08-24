let marks  = {
    harry :98,
    rohan :70,
    akash : 73
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}

//same ques using for in loop

for(let key in marks){
    console.log(key)
    console.log("the marks of "+key+" are "+marks[key])
} 

//mean of 4 numbers 

const mean =(a,b,c,d)=>{
    return ((a+b+c+d)/4)
}
console.log("mean is : "+mean(1,2,3,4))