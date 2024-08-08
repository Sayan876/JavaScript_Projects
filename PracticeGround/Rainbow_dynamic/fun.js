let buttons = document.querySelectorAll(".btn")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let section = document.querySelector("section")
let reset = document.querySelector(".reset")

buttons.forEach((element)=>{
    element.addEventListener("click",()=>{
        document.body.style.backgroundColor = element.innerText
        section.style.backgroundColor = element.innerText
    })

    element.addEventListener("mouseover",()=>{

        h2.innerText = `Click to any button to change the color to ${element.innerText}`
        element.style.backgroundColor = element.innerText
        
    })

    element.addEventListener("mouseout",()=>{
        element.style.backgroundColor = "rgb(41, 40, 40)"
        h2.innerText = "Click to any button to change the color"
    })
})

reset.addEventListener("click",()=>{
    document.body.style.backgroundColor = "black"
    section.style.backgroundColor = "black"
})