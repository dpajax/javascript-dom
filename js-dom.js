// function strangeCode(){
//     document.body.style.color = 'red'
//     document.body.style.transform = 'rotate(180deg)'
// }
// document.querySelector('hi').onclick = 'strangeCode'

//Document Object
//This is a reference to our HTML Document
// console.log(document)

// // The DocumentElement is a reference to the HTML Tag
// console.log(document.documentElement);

// // Getting The Head
// console.log(document.title);

// //getting the Body
// console.log(document.body);

// Functions/Methods for selecting directly unreachable elements 
  

//document.getElementByID(id)  --> returns on element with specified ID
// document .getElementsByClassName()  --> returns a collection of thr elements that share a class


// let paraTags = document.getElementsByClassName('para')
// Array.from(paraTags).forEach(para => {
//     para.style.color = 'purple'
// } )
// console.log(paraTags);

// let floatCursor = document.querySelector('.float-cursor');

// document.addEventListener('mousemove', function (evt) {
    
//     floatCursor.style.transform = `translate(${evt.clientX -30}px, ${evt.clientY}px)`
    
// })

const button = document.createElement('button')
button.innerHTML = "click Me Now"
button.id = 'clickity-click'

let para1 = document.querySelector('.para')
para1.insertAdjacentElement('afterend', button)
document.body.append(button)
