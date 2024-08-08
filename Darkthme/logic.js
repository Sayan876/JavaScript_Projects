let h1 = document.querySelectorAll("h1")
let sec = document.querySelector("section")
let button = document.querySelector("button")

console.log(Array.isArray(h1))
let pureh1 = Array.from(h1)

console.log(Array.isArray(pureh1))


function x(){
    if(button.innerText == "Dark Mode"){
        sec.style.backgroundColor = "black"
        pureh1.forEach((element)=>{
            element.style.color = "black";
        })
        button.innerText = "Light Mode"
    }
    else if(button.innerText == "Light Mode"){
        sec.style.backgroundColor = "white"
        h1.style.color = "black"
        button.innerText = "Dark Mode"
    }
}

