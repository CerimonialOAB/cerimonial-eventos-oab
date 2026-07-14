//======================================================
// MENU MOBILE
//======================================================

const menuToggle = document.getElementById("menu-toggle");
const menuMobile = document.querySelector(".menu-mobile");

menuToggle.addEventListener("click", function(){

    menuMobile.classList.toggle("ativo");

    if(menuMobile.classList.contains("ativo")){

        menuToggle.innerHTML="✖";

    }else{

        menuToggle.innerHTML="☰";

    }

});

//======================================================
// MENU ATIVO
//======================================================

const links = document.querySelectorAll(".menu a, .menu-mobile a");
const secoes = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 120;
        const altura = secao.offsetHeight;

        if(window.scrollY >= topo){

            atual = secao.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if(link.getAttribute("href") === "#" + atual){

            link.classList.add("ativo");

        }

    });

});

window.dispatchEvent(new Event("scroll"));


//======================================================
// BOTÃO VOLTAR AO TOPO
//======================================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//======================================================
// ANIMAÇÕES AO ROLAR
//======================================================

const elementosAnimar = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{
    threshold: 0.2
});

elementosAnimar.forEach(elemento => {

    observer.observe(elemento);

});


//======================================================
// LIGHTBOX
//======================================================

const imagens = document.querySelectorAll(".galeria-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const fecharLightbox = document.getElementById("fechar-lightbox");

imagens.forEach(imagem => {

    imagem.addEventListener("click", () => {

        lightbox.classList.add("ativo");

        lightboxImg.src = imagem.src;

        lightboxImg.alt = imagem.alt;

    });

});

fecharLightbox.addEventListener("click", () => {

    lightbox.classList.remove("ativo");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("ativo");

    }

});

