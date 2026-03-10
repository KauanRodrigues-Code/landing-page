// Função para observar os elementos e ativar a animação quando aparecerem no scroll
const observerOptions = {
    threshold: 0.15 // Ativa quando 15% do elemento estiver visível
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Aplica o observador em todos os elementos com a classe .reveal
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});

// Efeito de mudar a navbar ao rolar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 5%";
        nav.style.background = "rgba(0,0,0,0.98)";
    } else {
        nav.style.padding = "20px 5%";
        nav.style.background = "rgba(0,0,0,0.95)";
    }
});
