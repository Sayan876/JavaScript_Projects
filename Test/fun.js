let inputs = document.querySelectorAll("input")
let button = document.querySelector("button")
let table = document.querySelector("table")

let row 

function formhandle(){
    event.preventDefault()
    let fname = inputs[0].value
    let fplace = inputs[1].value

    if(button.innerText == "Submit"){

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let update = document.createElement("button")
        let remove = document.createElement("button")
        update.innerText = "Update"
        remove.innerText = "Delete"
    
        td1.innerText = fname
        td2.innerText = fplace
        td3.appendChild(update)
        td3.appendChild(remove)
    
        tr.append(td1,td2, td3)
        table.appendChild(tr)
    
        inputs[0].value = ""
        inputs[1].value = ""

        update.addEventListener("click",()=>{
            inputs[0].value = fname
            inputs[1].value = fplace
            button.innerText = "Update"
            row = tr
        })

        remove.addEventListener("click",()=>{
            tr.remove()
        })
    } else if(button.innerText = "Update"){

        row.cells[0].innerText = fname
        row.cells[1].innerText = fplace

        button.innerText = "Submit"
        inputs[0].value = ""
        inputs[1].value = ""

    }


    
    

    

}




function alertsee(){
    let fname = inputs[0].value
    let fplace = inputs[1].value

    if(fname==""||fplace==""){
        alert("Input fields are empty")
        button.style.cursor = "not-allowed"
    }else{
        button.style.cursor = "Pointer"
    }
}