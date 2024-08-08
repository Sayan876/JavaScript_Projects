let section = document.querySelector("section")
let article = document.querySelector("article")
let div = document.querySelector("div")


//Event Bubbling - the third value of addEventListener is FALSE
section.addEventListener("click",()=>{
    event.stopPropagation
    console.log("Section")
})

article.addEventListener("click",()=>{
    console.log("Article")
})

div.addEventListener("click",()=>{
    console.log("div")
    event.stopPropagation()
})


//Event Capturing

// section.addEventListener("click",()=>{
//     console.log("Section")
// },true)

// article.addEventListener("click",()=>{
//     console.log("Article")
// },true)

// div.addEventListener("click",()=>{
//     console.log("div")
// },true)