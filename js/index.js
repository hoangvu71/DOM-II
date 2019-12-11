// Your code goes here
const navBar = document.querySelector('.nav');
navBar.addEventListener('click', (event) => {
event.preventDefault();
})


const headerMouseOver = document.querySelector('.intro img');
headerMouseOver.addEventListener('mouseover', (element) =>{
    headerMouseOver.style.transform = "scale(1.2)";
})
headerMouseOver.addEventListener('mouseleave', (element) =>{
    headerMouseOver.style.transform = "scale(1)";
})

// This hide the "Welcome to the Fun Bus" whenever there's a key pressed
const keydownColor = document.querySelector('header h2');
addEventListener('keydown', () => {
        keydownColor.style.color = "white";
    })
addEventListener('keyup', (element) => {
    keydownColor.style.color = "black";
})

// This increase size of h2 to 10rem
addEventListener('wheel', () => {
    keydownColor.style.fontSize += "10rem";
})

const wheelP = document.querySelector('.text-content p');
addEventListener('scroll', ()=>{
    wheelP.style.color = "white";
})

addEventListener('resize', () => {
    document.body.style.backgroundColor = "red";
})

addEventListener('dblclick', () =>{
    document.body.style.background = "white";
})

const introP = document.querySelector('.intro p');
addEventListener('mousedown', (event) => {
    introP.style.background = "grey";
    event.stopPropagation();
    
})

addEventListener('mouseup', (event) => {
    introP.style.background = "white";
    event.stopPropagation();
})
