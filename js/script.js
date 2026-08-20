// MENU

const menu = document.getElementById("menu");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        menu.classList.add("menu-rolado");
    } else{
        menu.classList.remove("menu-rolado");
    }
})


// INTERAÇÃO DOS BLOCOS

const blocos = document.querySelectorAll(".aparecer");

const observador = new IntersectionObserver(function (entradas){
    entradas.forEach(function(entrada){

        if(entrada.isIntersecting){
            entrada.target.classList.add("visivel");
        }

    })
});

blocos.forEach(function(bloco){
    observador.observe(bloco);
});



// INTERAÇÃO VIDEO COM O SCROLL