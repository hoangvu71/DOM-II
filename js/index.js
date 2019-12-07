// Your code goes here
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

addEventListener('dblclick', () =>{
    wheelP.style.background = "black";
})

addEventListener('mouseover', () =>{
    document.querySelector('.img-content img').style.width = "10rem";
    }
)

addEventListener('mouseleave', () =>{
    document.querySelector('.img-content img').style.width = "30%";
    document.querySelector('.img-content img').stopPropergation;
    }
)
