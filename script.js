

window.addEventListener('scroll', function(){
    var componente = document.getElementById('fixo')
    var posicao = window.scrollY;
    if (posicao > 40 ){
        componente.classList.add('scroll');
    }
    else {
        componente.classList.remove('scroll')
    }
})


window.addEventListener('scroll', function(){
    var componente = document.getElementById('name')
    var posicao = window.scrollY;
    if (posicao > 40){
        componente.classList.add('scroll');
    }
    else {
        componente.classList.remove('scroll')
    }
})

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('active');
});





