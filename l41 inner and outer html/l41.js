let y =document.getElementsByTagName("span")[0]
console.log(y) //as an attribute
console.dir(y) //as an object
console.log(first.innerHTML)
first.innerHTML = "<i>hey i am italic</i>"
console.log(first.outerHTML)
first.outerHTML="<div id='div'>outer html</div>"
console.log(div.outerHTML)

console.log(document.body.textContent)
console.log(document.body.firstChild.data)
