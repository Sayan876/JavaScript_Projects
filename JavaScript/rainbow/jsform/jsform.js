let inputs  = document.querySelectorAll("input")

function formHandle(){
    event.preventDefault()
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
}