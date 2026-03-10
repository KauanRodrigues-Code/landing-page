// Animação ao descer a página (Scroll Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Mudar cor do header ao rolar
window.onscroll = function() {
    const header = document.getElementById("header");
    if (window.pageYOffset > 50) {
        header.style.background = "#000";
    } else {
        header.style.background = "transparent";
    }
};

// Executar uma vez no load
reveal();
