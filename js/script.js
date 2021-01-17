<<<<<<< HEAD
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
=======
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
>>>>>>> 6f74e446c37540ecc703d30fdb16203472d312ae
triangle.style.boxShadow = shadow; 