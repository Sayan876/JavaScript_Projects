let inputs = document.querySelectorAll("input")
let button = document.querySelector(".throw")
let table = document.querySelector("table")

let main = document.querySelector("main")
let buttonss = document.querySelector(".themes")
let alltds = document.querySelectorAll("td")
alltrs = document.querySelectorAll("tr")


let row

function formHandle(){
    event.preventDefault()
    let fname = inputs[0].value
    let salary = inputs[1].value
    let company = inputs[2].value
   
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let update = document.createElement("button")
    let remove = document.createElement("button")

    

     if(button.innerText == "Submit"){
        update.innerText = "Update"
        remove.innerText = "Delete"

        update.style.backgroundColor = "blue"
        update.style.marginRight = "10px"
        update.style.height = "20px"
        update.style.width = "70px"
        update.style.border = "1px solid blue"
        update.style.borderRadius = "50px"
        update.style.color = "white"
        update.style.cursor = "pointer"
        update.style.boxShadow = "0px 0px 5px blue"
        remove.style.backgroundColor = "red"
        remove.style.marginLeft = "10px"
        remove.style.height = "20px"
        remove.style.width = "70px"
        remove.style.border = "1px solid red"
        remove.style.borderRadius = "50px"
        remove.style.color = "white"
        remove.style.boxShadow = "0px 0px 5px red"
        remove.style.cursor = "pointer"

        td1.innerText = fname
        td2.innerText = salary
        td3.innerText = company
        td4.appendChild(update)
        td4.appendChild(remove)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        table.appendChild(tr)

        td1.style.color = "rgb(11, 245, 11)"
        td2.style.color = "rgb(11, 245, 11)"
        td3.style.color = "rgb(11, 245, 11)"

        update.addEventListener("click",()=>{
        inputs[0].value = fname
        inputs[1].value = salary
         inputs[2].value = company
        button.innerText = "Update"
        button.style.backgroundColor = "blue"
        button.style.boxShadow = "0px 0px 15px blue"
        row = tr
         })

         remove.addEventListener("click",()=>{
            tr.remove()
         })
        

     }else if(button.innerText=="Update"){
            row.cells[0].innerText = fname
            row.cells[1].innerText = salary
            row.cells[2].innerText = company

            inputs[0].value = ""
            inputs[1].value = ""
            inputs[2].value = ""
     }

    
     
   

    

        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
}

function x(){
    let fname = inputs[0].value
    let salary = inputs[1].value
    let company = inputs[2].value
    if(fname == ""|| salary == ""||company==""){

        
        button.style.backgroundColor = "red"
        button.style.cursor= "not-allowed"
        button.style.boxShadow = "0px 0px 15px red"
    }else{
        button.style.backgroundColor="green"
        button.style.boxShadow = "0px 0px 15px green"
        button.style.cursor = "pointer"
    }

}
function yl(){
    button.style.backgroundColor="rgba(0, 0, 0, 0.705)"
    button.style.boxShadow = "0px 0px 5px white"
    button.innerText = "Submit"
}





let puretr = Array.from(alltrs)
let pureinp = Array.from(inputs)

console.log(Array.isArray(alltds))
let purerd = Array.from(alltds)
console.log(Array.isArray(purerd))

function changethme(){

    
    

    if(buttonss.innerText == "Enable white mode"){
       
        
        main.style.backgroundColor = "white"
        document.body.style.backgroundColor = "white"
        
        buttonss.innerText = "Enable Dark mode"
        purerd.forEach((element)=>{
            element.style.color = "black";
        })

        puretr.forEach((element)=>{
            element.style.color = "black";
        })

        pureinp.forEach((element)=>{
            element.style.backgroundColor = "rgb(170, 170, 170)"
        })

        button.style.boxShadow = "0px 0px 5px black"

        
        buttonss.style.backgroundColor = "blue"
        buttonss.style.boxShadow = "0px 0px 5px blue"
        
        
        
    }

    else if(buttonss.innerText == "Enable Dark mode"){
        main.style.backgroundColor = "black"
        document.body.style.backgroundColor = "black"
        buttonss.innerText = "Enable white mode"

        button.style.backgroundColor = " rgba(0, 0, 0, 0.705)"
        button.style.boxShadow = "0px 0px 5px white"

        purerd.forEach((element)=>{
            element.style.color = "white";
        })

        pureinp.forEach((element)=>{
            element.style.backgroundColor = "rgb(54, 52, 52)"
        })
        buttonss.style.backgroundColor = "red"
        buttonss.style.boxShadow = "0px 0px 5px red"
        

    }

   
}

