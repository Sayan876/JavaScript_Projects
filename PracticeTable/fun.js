let inputs = document.querySelectorAll("input")
let button = document.querySelector("button")
let table = document.querySelector("table")

let row 

function formhandle(){
    event.preventDefault();
    let fname = inputs[0].value
    let fplace = inputs[1].value

    if(button.innerText == "Submit"){

        let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let update = document.createElement("button")
    let deletee = document.createElement("button")

    tr.append(td1,td2,td3)

    update.innerText = "Update"
    deletee.innerText = "Delete"

    td1.innerText = fname
    td2.innerText = fplace
    td3.appendChild(update)
    td3.appendChild(deletee)
    table.appendChild(tr)

    update.addEventListener("click",()=>{
        inputs[0].value = fname
        inputs[1].value = fplace
        button.innerText = "Update"

        row = tr
    })
    deletee.addEventListener("click",()=>{
        tr.remove()
    })

    inputs[0].value = ""
    inputs[1].value = ""

    }else if(button.innerText == "Update"){
           row.cells[0].innerText = fname
           row.cells[1].innerText = fplace

           inputs[0].value = ""
           inputs[1].value = ""

           button.innerText = "Submit"
    }

   
}