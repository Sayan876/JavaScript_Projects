let inputs = document.querySelectorAll("input")
let button = document.querySelector(".hit")
let table = document.querySelector("table")
let theme = document.querySelector(".theme")

let altd = document.querySelectorAll("td")


let main = document.querySelector("main")


let row 

function formhandle(){


    
    event.preventDefault()
    let fname = inputs[0].value
    let fbounty = inputs[1].value
    let fcompany = inputs[2].value
    
    if(button.innerText == "Submit"){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let update = document.createElement("button")
        let removee = document.createElement("button")
    
        update.innerText = "Update"
        removee.innerText = "Delete"
    
        update.style.marginRight = "5px"
        update.style.color = "white"
        update.style.backgroundColor = "blue"
        update.style.boxShadow = "0px 0px 5px blue"
        update.style.cursor = "pointer"
        update.style.border = "1px solid blue"
        update.style.width = "70px"
        update.style.height = "20px"
        update.style.borderRadius = "50px"
        removee.style.marginLeft = "5px"
        removee.style.color = "white"
        removee.style.backgroundColor = "red"
        removee.style.boxShadow = "0px 0px 5px red"
        removee.style.cursor = "pointer"
        removee.style.border = "1px solid red"
        removee.style.borderRadius = "50px"
        removee.style.width = "70px"
        removee.style.height = "20px"
    
        td1.innerText = fname
        td2.innerText = fbounty
        td3.innerText = fcompany
        td4.append(update, removee)

        td1.style.color = "green"
        td2.style.color = "green"
        td3.style.color = "green"

        
      
    
        tr.append(td1,td2,td3,td4)
    
        table.appendChild(tr)
    
        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""

        removee.addEventListener("click",()=>{
            tr.remove()
        })

        update.addEventListener("click",()=>{
            inputs[0].value = fname
            inputs[1].value = fbounty
            inputs[2].value = fcompany

            row = tr

            button.innerText = "Update"
            button.style.backgroundColor = "blue"
            button.style.boxShadow = "0px 0px 15px blue"

            
        })

    }else if(button.innerText=="Update"){
               
              row.cells[0].innerText = fname
              row.cells[1].innerText = fbounty
              row.cells[2].innerText = fcompany

              inputs[0].value = ""
              inputs[1].value = ""
              inputs[2].value = ""
              button.innerText = "Submit"
              button.style.backgroundColor = "rgba(8, 8, 8, 0.932)"
              button.style.boxShadow = "0px 0px 5px white"
    
             }
    

}

function x(){
    let fname = inputs[0].value
    let fbounty = inputs[1].value
    let fcompany = inputs[2].value

    if(fname == ""||fbounty==""||fcompany == "")
    {
        button.style.cursor = "not-allowed"
        button.style.backgroundColor = "red"
        button.style.boxShadow = "0px 0px 15px red"
    }

    else{
        button.style.cursor = "pointer"
        button.style.backgroundColor = "green"
        button.style.boxShadow = "0px 0px 15px green"

    }
}

function y(){
    button.style.boxShadow = "0px 0px 5px white"
    button.style.backgroundColor = " rgba(8, 8, 8, 0.932)"
}

let pureinp = Array.from(inputs)
let puretd = Array.from(altd)
function ctheme(){
    if(theme.innerText=="Enable white mode"){
         document.body.style.backgroundColor = "white"
         main.style.backgroundColor = "white"
         theme.innerText = "Enable Dark mode"
         theme.style.backgroundColor = "blue"
         theme.style.boxShadow = "0px 0px 6px blue"

         pureinp.forEach((element)=>{
            element.style.backgroundColor = "rgb(163, 159, 159)"
         })
         altd.forEach((element)=>{
            element.style.color = "black"
         })
        
    } else if(theme.innerText == "Enable Dark mode"){
        document.body.style.backgroundColor = "black"
        main.style.backgroundColor = "black"
        theme.innerText = "Enable white mode"
        theme.style.backgroundColor = "red"
         theme.style.boxShadow = "0px 0px 6px red"
         pureinp.forEach((element)=>{
            element.style.backgroundColor = " rgb(19, 18, 18)"
         })
         altd.forEach((element)=>{
            element.style.color = "white"
         })

    }
}