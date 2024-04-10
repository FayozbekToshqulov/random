// let btn = document.querySelector('button')


// btn.addEventListener('click', function (){
//     let inp = document.getElementById('inp').value;
//     let inp2 = document.getElementById('inp2').value;
//     document.querySelector('p').innerHTML = Math.floor(Math.random() * inp)
        
// }) 


let pp = document.getElementById('pp');
let btn = document.getElementById('btn');


function ran(){
  let a = parseInt(document.getElementById('inp').value)
  let b = parseInt(document.getElementById('inp2').value)
  pp.innerHTML = ( Math.floor(Math.random() *( b - a + 1) ) + a);
}
btn.onclick = ran
