let marks = [1,2,3,4,5,false,"not present"]
console.log(marks[0])
console.log(marks[1])
console.log(marks[5])
marks[8]=89
console.log(marks[8])
console.log("this is length of array : "+marks.length)
console.log(typeof marks)
for(let i =0;i<=marks.length;i++){
    console.log("element of array at postion "+i+" is :"+marks[i])
}