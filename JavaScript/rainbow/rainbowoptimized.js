let section = document.querySelector("section")

let buttons = document.querySelectorAll("button")

let h2 = document.querySelector("h2")

buttons.forEach((element)=>{
    element.addEventListener("click",()=>{
        section.style.backgroundColor = element.innerText
    })

    element.addEventListener("mouseover",()=>{
        h2.innerText = `click the botton to get ${element.innerText} background`
        element.style.backgroundColor = element.innerText
        h2.style.color = element.innerText
        h2.style.transition = "2s"
        
    })
    
    
    element.addEventListener("mouseout",()=>{
        h2.innerText = `Click the button to change the Background color`
        element.style.backgroundColor = "black"
        h2.style.transition = "2s"
        h2.style.color= "white"
    })
})


