//Day 3


// let web1 = "html"
// let web2 = "css"
// let web3 = "JS"

// console.log(web1+ " is used for the structer"+ web2 +"css is used for style "+web3 +" is used for functionality")

// console.log(`${web1} is used for the structer ${web2} is used for the style ${web3} is used for funtionality`)


//Day 4
//user input


// let fname = prompt("What is your name");
// let age = prompt("And your age?");
// let role = prompt("what's your profession?");

// console.log(`My name is ${fname} and I'm ${age} years old and I work as a ${role} `);

// console.log("My name is " + fname + " and I'm " + age + " years old. And I work as a " + role);
// day 5
// let n1 = parseInt(prompt("Enter the first number"));
// let n2 = parseInt(prompt("Enter the second number"));
// let add = (n1 + n2);
// let sub = (n1 - n2);
// let mul = (n1 * n2);
// let div = (n1 / n2);

// console.log("Addition of " + n1 + " & " + n2 + " is " + add);
// console.log("Substraction of " + n1 + " & " + n2 + " is " + sub);
// console.log("Multiplication of " + n1 + " & " + n2 + " is " + mul);
// console.log("Division of " + n1 + " & " + n2 + " is " + div);


//day 5

// let x = [10,20,30,40]
// console.log(x)
// x.pop()
// console.log(x)
// x.shift()
// console.log(x)
// x.unshift(45)
// console.log(x)
// x.push(23)
// console.log(x)

// let y = ["hello", 80, "howdy", 67, "Bonjour"]
// console.log(y)
// y.pop()
// console.log(y)
// let a = y.includes("Arigato")
// let b = y.indexOf("hello")
// let c = y.indexOf(80)
// console.log(a)
// console.log(b)
// console.log(c)


// day 6


// let arr = [10, 20, 30, 40, 50]

// console.log(arr.length)
// arr.splice(0,3,"howdy"); //Starting index, delete count, Elements to be deleted
// console.log(arr)

// console.log("Slice method");

// let arr2 = ["hi", "howdy", "Luffy", "Zubair", "Shoaib"]

// let x = arr2.slice(1,2)
// console.log(x);



// Day 7


// let m = ["hello", "hi"]
// let x = [10,20,30,40]
// let y = [50,60,70,80]
// let z = [x,y]
// console.log(z);
// let w = x.concat(y,m);
// console.log(w);

//Object

// let student = {
//     Name: "Max Payne",
//     Age: 35
// }

// console.log(student.Name)

// student.Marks="8.24 cgpa";
// console.log(student);

// delete student.Age;
// console.log(student)

// student.Age=36
// console.log(student)


// Day 8

// multiple objects

// let person = {
//        name: "Alex",
//        role: "Sergent",
//        age: 35,
//        skills:["two hand weapons", "sidearms", "Close combat"],
//        friends:[
//         {name:"Nelson", skills:["grenades", "close combat"]},
//         {name:"Hudson", skills:["Stealth", "two-handed weapons"]},
//         {name:"Viktor", skills:["Rush", "Knifes"]}
//        ]
// }


// console.log(person)
// console.log(person.skills[1])
// console.log(person.friends)
// console.log(person.friends[2])
// console.log(person.friends[2].skills[0])


// console.log(person.skills.splice(2,0,"java"))



// console.log(`My name is ${person.name}, I am working as ${person.role}`)
// console.log("These are skills listed below.")
// console.log(`${person.skills[0]}\n${person.skills[1]}\n${person.skills[2]}\n${person.skills[3]}`)

// console.log(`I have few friends. They are\n${person.friends[0].name}\n${person.friends[1].name}\n${person.friends[2].name}`)

// Day 9


// let empDetails = {
//       empCompany: "Task force 141",
//       country: "United States of America"
      
// }
// let attributes = ["stealth", "soldier"]
// let person = {
//        name: "Alex",
//        role: "Sergent",
//        age: 35,
//        skills:["two hand weapons", "sidearms", "Close combat"],
//        friends:[
//         {name:"Nelson", skills:["grenades", "close combat"]},
//         {name:"Hudson", skills:["Stealth", "two-handed weapons"]},
//         {name:"Viktor", skills:["Rush", "Knifes"]}
//        ],
//        empDetails,attributes
// }

// console.log(person.empDetails)
// console.log(person.empDetails.country)

// console.log(person.attributes)

//One line array

//9042456726 Azik Jsp whatsapp and calling

// let arr = ["html", "css", "js"]

// let [web1, web2, web3, web4] = arr
// console.log(web1, web2, web3, web4)

//Day 10 Functions

//1.Normal function
// function greet(){
//     console.log("Bonjour Oui Oui")
// }

// greet()
// greet()

//2.Anonymous Functions

// x = function (){
//     console.log("Nothing is true")
// }

// console.log(x())
// console.log(x) //This will print the whole body of the function


//3.Function with Expression

// let x = function message(){
//     console.log("MY name is Shay Cormac and I make my own luck");
// }


// console.log(x())


// console.log("Hello")

// function x(){
//     let a = 20
//     a = 30
//     console.log(a)
// }


// function y(){
//     let b = 40
//     console.log(b)
// }
// y()
// x()


//Day 11

// console.log("Hello")
// let a = 10
// function x(){
//     let a = "hi"
//     console.log(a)
// }

// x()
// function y(){
//     let a = 20
//     console.log(b)
// }
// y()
// console.log("End")


//Day 13


// function add(a,b){
//     console.log(a+b)
// }


// add(3,4)

// function pass(x,y){
//     console.log(x)
//     console.log(y)
// }

// pass(100,99)


// function Obj(z){
//     console.log(z)
// }

// Obj({Pname:"David",age:32})



// function ret(x,y){
//     return x+y
// }

// console.log(ret(8,7))


// function x(){
//     return "hi"
// }

// console.log(x())



// function b(){
//     console.log("hello")
//     return "howdy"
//     console.log("hi")
// }
// console.log("b()")
// b()
// console.log("Just printing b")
// console.log(b)
// console.log("Printing b()")
// console.log(b())

// console.log("After storing b() inside a")
// let a = b()
// console.log(a)


//Day 15


// let a = 10
// function x(){
//     a = 20
//     console.log(a)
//     function y(){
//         a = 30
//         return 40
//     }
//     console.log(a)
//     a = y()
//     console.log(a)
// }

// console.log(a)
// x()


// Day 17
// let a = function(){
//     return 10;
// }

// a()
// console.log(a())

//Day 18

//Arrow function

// let add=(a,b)=> a+b
// console.log(add(4,7))

// let add1 = (a,b) =>{
//     return a+b;
// }

// x = add1(7,8)
// console.log(x)


// function x(a,b){
//     console.log(a+b)
// }

// x(6,7)


//Day 19

// function x(a,b){
//     console.log(a)
//     console.log(b)
//     b()
// }

// x(10,function(){console.log("CB")})
// x(15,()=>console.log("CB"))

//Addition
// function x(a,b, task){
//     let value = task(a,b)
//     console.log(value)
// }


// x(10,20,(m,n)=>m+n) //output 30 


//Subtraction with console.log

// function x(a,b,task){
//     let value =task(a,b)
//     console.log(value)
// }

// x(30, 20, (m,n)=>m-n)
// x(10,20, (m,n)=>console.log(m+n))



//With return keyword
// function x(a,b,task){
//     let value =task(a,b)
//     console.log(value)
// }

// x(30, 20, (m,n)=>m-n)
// x(10,20, (m,n)=>console.log(m+n))


//Day 20

// function Person(personName,personAge){
//     this.name = personName;
//     this.age = personAge
// }

// let person1 = new Person("Alex", 57)
// let person2 = new Person("David",35)

// console.log(person1)

//spread Operator(which is used to unpack the eements) and rest Operator(which is used inside in function and object)

// function x(a,...b){
//     console.log(a,b)
// }

// x(10,20,30,40,50)
// console.log("================")
// let a = [10,20,30,40]
// let b = [50,69,70,80]

// let c = [...a,...b]
// console.log(a,b)//it will be printing array
// console.log(c)

//Day 25

// let person = {
//     name: "Kiran",
//     age:25
// }

// let employee = {
//     empID: 123,
//     empDesignation: "SDE",
//     ...person
// }
// console.log(employee)


//Day 25

// let nums = [12, 14, -30, 100, 88, 45, 20]


// console.log(...nums)

// let maxvalue = Math.max(...nums)
//  console.log(maxvalue)

//  let minvalue = Math.min(...nums)
//  console.log(minvalue)



//  let x = Math.round(10.5)
//  console.log(x)

//  let y = Math.ceil(10.1)
//  console.log(y)

//  let z = Math.floor(10.8)
//  console.log(z)


// let a = 10
// let b = 10

// if(a==b){
//     console.log("You liar")
// }
// else{
//     console.log("you're good to go now ")
// }


// for(i = 0; i<11; i++){
//     console.log("Pull ups " + i)
// }

// let person = {
//     name:'Luffy',
//     age:25,
//     skills: ["women", "weeds", "Alchohol"]
// }

// let keys = Object.values(person)
// console.log(keys)

// let values = Object.values(person)
// console.log(values)

// let entires = Object.entries(person)
// console.log(entries)

//Day 26

// let person1 = {
//     name:'Luffy',
//     age:25,
//     skills: ["women", "weeds", "Alchohol"]
// }

// let person2 = {
//     name:'Nami',
//     age:26,
//     skills: ["Stealing", "Catburgler", "Alchohol"]
// }

// function greet(a,b){
//     console.log(this,a,b)
// }

// greet.apply(person1,[10,30])
// greet.apply(person2,[20,40])

// let arr = [10,20,30,40,50]

// for(var x in arr){
//     console.log(x)
// }

// for(let y of arr){
//     console.log(y)
// }

// arr.forEach(function(elem, index)  //highlighted  
// {
//     console.log(elem, index)
// })


// let arr = [10,20,30,40] 
//  let y = arr.forEach((x)=>{
//     console.log(x)
//     return x
//  })

// console.log("==============================")

//  let z = arr.map((x)=>{
//     console.log(x)
//     return x
//  })
 
// console.log(z)


//25/03/2024
// let arr = [10,20,30,40,50]

// let y = arr.filter((x)=>{return x<30})

// console.log(y)

// let x = arr.map((x)=>{return x;})

// console.log(x)
//important 

// let items = [{BookName:"Html", bookPrice:1500},{bookName:"Css",bookPrice:1200},{bookName:"js",bookPrice:1700},{bookName:"React-js",bookPrice:1400}]

// console.log(items)

// let filteredBooks = items.filter((items)=>
// { let x =(items.bookPrice<1700)
// return x
// })
// console.log(filteredBooks)

// let fstPricedBooks = filteredBooks.map((items)=>{
//    let gst = items.bookPrice*30/100
//    items.bookPrice = items.bookPrice+gst
//    return items
// })

// console.log(fstPricedBooks)

// let finalPrice = fstPricedBooks.reduce((acc,cv)=>{
//    return acc+cv.bookPrice
// },0)

// console.log(finalPrice)

// let books = [{bname:"abc",price:900},{bname:"xbc",price:1900},{bname:"zbc",price:3900},{bname:"ybc",price:2900}]

// console.log(typeof(books))

// console.log(books)

// let filteredbooks = books.filter((book)=>{ return book.price<3000})

// console.log(filteredbooks)

// let gstprice = filteredbooks.map((book)=>{
//    let gst = book.price*30/100
//    book.price = book.price+gst
//    return book
// })

// console.log(gstprice)

// let finalprice = gstprice.reduce((acc,cv)=>{
//    return acc+cv.price
// },0)

// console.log("Final price "+finalprice)
//important

//call method

// const person = {
//    fullName: function() {
//      return this.firstName + " " + this.lastName;
//    },
//    firstName: "John",
//    lastName: "Doe"
//  }
 
//  console.log(person.fullName.call(person)); // output: "John Doe"


//  //apply method

//  const numbers = [5, 6, 2, 3, 7];

// const maxNum = Math.max.apply(null,numbers);

// console.log(maxNum); // output: 7


// //bind method


// const person2 = {
//    fullName: function() {
//      return this.firstName + " " + this.lastName;
//    },
//    firstName: "John",
//    lastName: "Doe",
//    city: "Paris"
//  }

 
 
//  const personFullName = person2.fullName.bind(person2);
 
//  console.log(personFullName()); // output: "John Doe"


// Varable hoisting

// sum(3,4)
// function sum(a,b){
//     console.log(a+b);
// }


//Function currying

// function sum(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(sum(1)(2)(3)) 

console.log(typeof(NaN))//number
console.log(typeof(undefined))
console.log(typeof(String))
console.log(false + undefined)

//Variable hoisting
// console.log(x)
// var x = 10

//Function hoisting

// sum(10,8)
// function sum(x,y){
//    console.log(x+y)
// }

//Closure

// function pdet(){
//    let age = 25

//    function addAge(){
      
//       return age;
//    }

//    return addAge;
// }

// let disp = pdet()
// console.log(disp())


//Callback Function 

// function greet(name,sente){
//    console.log("hi" + name)

//    return sente()
// }

// function callmeback(){
//    console.log("Hi, I am a callback function")
// }

// greet("Peter",callmeback)

//Higher Order Function

// let persons= [{name:"Sayan", sal:2500},{name:"Rayan", sal:3500},{name:"Shyam", sal:5500}]


// let disp = persons.map((elem)=>{
//    return elem.sal
// })

// console.log(disp)

//ForEach

// let x = [{name:"Sayan", sal:2500},{name:"Rayan", sal:3500},{name:"Shyam", sal:5500}]

// let disp = x.forEach((elem)=>{
//    console.log(elem.sal)
// })

//



//Rest Operator(It is used inside an Array to accept multiple values in a form of Array)

// function a(x,...y){
//    console.log(x,y)
// }

// a(10,12,34,334,45)

//Spread Operator(It is used to unpack the values or elements)


// x = [10,20,30,40]
// y = [50,60,70,80]

// z = [...x,...y]

// console.log(z)

// call method

// let person = {

//    fullname:function(){
//       return this.pname + " " + this.plastName
//    },

//    pname:"Roronoa",
//    plastName:"Zubair"

// }

// let pfullname= person.fullname.call(person)

// console.log(pfullname)

//Apply method

// let arr = [20, 30, 400, 323, 21]

// let maxNum = Math.max.apply(null, arr)

// console.log(maxNum)

//Bind method

// let person2 = {
//   fullName:function(){
//    return this.firstName + " " + this.lastName
//   },

//   firstName:"Sayan",
//   lastName:"Datta"

// }

// let pfullName = person2.fullName.bind(person2)

// console.log(pfullName())


//Changing the background color with the help of addEventListener
// let h2s = document.querySelectorAll("h2")

// let chng = document.querySelector(".changeme")

// console.log(typeof(h2s))
// console.log(Array.isArray(h2s))

// let pureArray = Array.from(h2s)
// console.log(pureArray)

// chng.addEventListener("click",()=>{
//    pureArray.forEach((elem)=>{
//       elem.style.backgroundColor="red"
//    })
// })


// let para = document.querySelector(".heyo")
// let incre = document.querySelector(".ibut")
// let decre = document.querySelector(".dbut")

// let count = 0
// incre.addEventListener("click",()=>{
//    count = count + 1
//    para.innerText = count
// })

// decre.addEventListener("click",()=>{
   
//    if(para.innerText>0){
//       count = count - 1
//       para.innerText = count
//    }
// })

// function sum(x){
//     return (y)=>{
//         return (z)=>{
//             return x + y + z
//         }
//     }
// }


// console.log(sum(1)(2)(3))


// let persons = [{name:"Sayan", sal:2500},{name:"Rayan", sal:3500},{name:"Shyam", sal:5500}]

// let filteredper = persons.filter((person)=>{
//     return person.sal>2500
// })

// let incre = filteredper.map((persons)=>{
//     persons.sal = persons.sal + 30
//     return persons

// })

// let finalx = incre.reduce((acc,cv)=>{
//     return acc + cv.sal
// },0)

// console.log(finalx)

// let person1 = [{name:"Sayan", sal:2500},{name:"Rayan", sal:3500},{name:"Shyam", sal:5500}]

// let arr = Object.keys(person1)
// console.log(arr)

// function student(x,y){
//     this.x = x
//     this.y = y
// }

// let s1 = new student("sayan", "abc")

// console.log(s1.y)

//Slice

// let arr = [10, 20, 30, 40 ,50]

// let x = arr.slice(0,4)
// console.log(x)

//Closure

// function clo(){
//     let age = 25
//     function realage(){
//         return age
//     }
//     return realage
// }

// console.log(clo()())

// let person1 = [{name:"Sayan", sal:2500},{name:"Rayan", sal:3500},{name:"Shyam", sal:5500}]

// let x = Object.keys(person1)
// console.log(x)


// let books = [{bname:"html",price:1760},{bname:"htmls",price:999},{bname:"htmlssdf",price:2800}]

// let filteredbooks = books.filter((book)=>{
//     return book.price>1000
// })

// let uprice = filteredbooks.map((bookss)=>{
//     bookss.price = bookss.price + 100
//     return bookss
// })

// let finalized = uprice.reduce((acc,cv)=>{
//     return acc + cv.price
// },0)


// console.log(finalized)

//Higher Order funciton

// function sum(a,b, ab){
//     result = a + b
//     ab(result)
// }


// function fin(val){
//     console.log(val)
// }

// sum(3,4,fin)
// sum(4,6,(val)=>{console.log(val)})

//Callback function

// function greet(name,callme){
//     console.log("hi "+ name)
//     callme()
// }

// function callbackfu(){
//     console.log("Hi, I'm a callback function")
// }

// greet("peter",callbackfu)

//IIFE

// let x = (function(){
//     return "IIFE"
// }) 

// console.log(x)

//Higher Order

// function add(x,y,callme){
//     let result = x + y
//     callme(result)
// }

// function fun(val){
//     console.log(val)
// }

// add(7,4,fun)

//Clousure

// function parent(){
//     let age = 25
//     function child(){
//         return age
//     }
//     return child
// }

// let x = parent()
// console.log(x())

//implicit return

// let x = (a,b)=>a + b


// let result = x(3,4)
// console.log(result)

//Explicit return

// let x = (a,b)=>{
//     return a + b
// }

// let result = x(4,5)
// console.log(result)

let arr = [{name:"ABC", salary:3500},{name:"PQR", salary:4500},{name:"XYZ", salary:5500}]

let x = arr.filter((per)=>{
    return per.salary>4000
})

let finals = x.reduce((acc,cv)=>{
    return acc+cv.salary
},0)

console.log(finals)

let val = Object.values(arr)
console.log(val)
