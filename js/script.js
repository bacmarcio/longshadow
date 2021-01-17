let box = document.querySelector('.box');
let circle = document.querySelector('.circle');
let triangle = document.querySelector('.triangle');

let shadow = '';
for (let i = 0; i < 500; i++) 
{
    shadow += (shadow? ',':'') + i*1+'px ' +i*1+'px 0 #de2852a3';
    
}
box.style.boxShadow = shadow; 
circle.style.boxShadow = shadow; 
triangle.style.boxShadow = shadow; 