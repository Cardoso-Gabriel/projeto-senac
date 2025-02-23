const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Função para fechar o modal
function fechar() {
    const modal = document.getElementById("sumir");
    sumir.style.display = "none";
};


bnt = document.getElementById("bnt");
sumir = document.getElementById("sumir");

bnt.addEventListener("click", function () {
    if (sumir.style.display === "block") {
        sumir.style.display = "none";
    } else {
        sumir.style.display = "block";
    }
});




function chekin(id) {
    const dataInput = document.getElementById(id);
    dataInput.showPicker();
}

//   __________________________________________________

bnt = document.getElementById("onde");
esconder = document.getElementById("esconde");

bnt.addEventListener("click", function () {
    if (esconder.style.display === "block") {
        esconder.style.display = "none";
    } else {
        esconder.style.display = "block";
    }
});

// Evento global para fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    if (!esconder.contains(event.target) && event.target !== bnt) {
        esconder.style.display = "none";
    }
});

//   __________________________________________________


ovelha = document.getElementById("mudar");
mudar = document.getElementById("escondido");

ovelha.addEventListener("click", function () {
    if (mudar.style.display === "block") {
        mudar.style.display = "none";
    } else {
        mudar.style.display = "block";
    }
});

// Evento global para fechar o menu ao clicar fora dele
// document.addEventListener("click", (event) => {
//   if (!mudar.contains(event.target) && event.target !== ovelha) {
//     mudar.style.display = "none";
//   }
// });


document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('modalImage').src = this.src;
    });
});

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-05ZJ1QM2CW');