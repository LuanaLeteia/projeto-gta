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

gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".capa-video");

function animarCapa(){
    const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
            trigger: ".capa",
            start: "top top",
            end: "+=2500",
            scrub: 1,
            pin: true
        }
    });

    linhaDoTempo.to(".capa-conteudo, .capa-barra, .capa-seta", {
        opacity: 0,
        scale: 0.6,
        duration: 0.
    }, 0);

    linhaDoTempo.to(video, {opacity: 1, duration: 0.8}, 0);

    linhaDoTempo.to(video, {
        currentTime: video.duration,
        duration: 1,
        ease: "none"
    }, 0);
};

if (video.readyState >= 1){
    animarCapa();
}else{
    video.addEventListener("loadedmetadata", animarCapa);
};

