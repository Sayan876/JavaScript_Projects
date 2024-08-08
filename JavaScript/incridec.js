let para = document.querySelector(".heyo")
let incre = document.querySelector(".ibut")
let decre = document.querySelector(".dbut")

let count = 0

// incre.forEach((ele)=>{
//    ele.addEventListener("click",()=>{
//       count = count + 1
//       para.textContent = count
//    })

// })


incre.addEventListener("click",()=>{
    count = count + 1
    para.textContent = count
})

decre.addEventListener("click",()=>{
    if(para.innerText>=0){
        count = count - 1
        para.innerText = count
    }
})

