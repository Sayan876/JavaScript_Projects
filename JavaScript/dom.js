let headingElement = document.getElementById("a")
headingElement.style.color = "blue "

console.log(headingElement.innerText)


headingElement.innerText = "Hey you yes you"
headingElement.innerHTML = "<h6>Hello howdy! Something you need?</h6>"


let divisions = document.getElementsByClassName("c")
console.log(divisions)

// divisions[0].style.color="red"
// divisions[1].style.color="cyan"

//Html collection looks like Array

// let checkDivs = Array.isArray(divisions)
// console.log(checkDivs)
// Checking it's an array or not




let pureArray = Array.from(divisions)
console.log(Array.isArray(pureArray))  //True because now it has been converted to an Array
console.log(Array.isArray(divisions))  //False because it's not a pure Array

pureArray.forEach((element)=>{
    element.style.backgroundColor = "red"
})

console.log(pureArray.length)





let paragraph = document.getElementsByTagName("p")

console.log(Array.isArray(paragraph))

let pureArrayParagraph = Array.from(paragraph)

console.log(Array.isArray(pureArrayParagraph))

//Using for loop
for(let i =0; i<paragraph.length; i++){
    paragraph[i].style.color="white";
}


//Using forEach
pureArrayParagraph.forEach((element)=>{
    element.style.backgroundColor = "blue";
})

//it targets all the elements 
let secondheading = document.querySelectorAll(".z");

console.log(secondheading)

console.log(Array.isArray(secondheading))
//checking it's an Array or not
if(Array.isArray(secondheading)==false){
    console.log("not an Array")
}else{
    console.log("It's an Array")
}

secondheading.forEach((element)=>{
    element.innerText = "Ready to Die?"
})

secondheading.forEach((element)=>{
    element.style.color="red"
})




//Dom manipulation

function y(){
    document.body.style.backgroundColor="black"
    let h3 = document.querySelector("h3")
    h3.innerText = "No I was just passing by"
   
    h3.style.color = "red"
}


function x(){
    let h3 = document.querySelector("h3")
    h3.innerText = "Hello! Something you need?"
    h3.style.color = "black"
}