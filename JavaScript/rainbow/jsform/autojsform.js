let inputs = document.querySelectorAll("input")
let button = document.querySelector("button")
let table = document.querySelector("table")


let id = 0

function formHandle() {
    event.preventDefault()
    let fname = inputs[0].value;
    let salary = inputs[1].value;
    let company = inputs[2].value;



    if (fname == "" || salary == "" || company == "") {
        alert("Input fields are empty")
    } else {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let update = document.createElement("button")
        let remove = document.createElement("button")

        update.innerText = "Update"
        remove.innerText = "Delete"


        td1.style.color = "white"
        td1.style.textAlign = "center"
        td2.style.color = "white"
        td2.style.textAlign = "center"
        td3.style.color = "white"
        td3.style.textAlign = "center"
        td4.style.display = "flex"
        td4.style.justifyContent = "space-evenly"
        

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

        update.addEventListener("click",()=>{
            inputs[0].value = fname
            inputs[1].value = salary
            inputs[2].value = company

            button.innerText = "Update"
            tr.remove()
            
        })

        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
    }
}


function x() {
    let fname = inputs[0].value;
    let salary = inputs[1].value;
    let company = inputs[2].value;
    if (fname == "" || salary == "" || company == "") {
        button.style.cursor = "not-allowed"
        button.style.backgroundColor = "red"
        
        button.style.boxShadow = "0px 0px 25px red"
    } else {
        button.style.cursor = "pointer"
        button.style.backgroundColor = "green"
        button.style.boxShadow = "0px 0px 25px green"
    }
}

function y() {
    button.style.backgroundColor = "grey"
    button.style.boxShadow = "0px 0px 5px grey"

}