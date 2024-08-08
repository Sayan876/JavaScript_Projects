let ol = document.createElement("ol")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")

li1.innerText = "Max Payne"
li2.innerText = "Ethan Winters"
li3.innerText = "Leon S kennedy"

ol.appendChild(li1)
ol.appendChild(li2)
ol.appendChild(li3)

document.body.append(ol)
ol.type = "a"