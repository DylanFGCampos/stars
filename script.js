const starsContainer = document.getElementById('stars-container');
const message = document.getElementById('message');
const numStars = 10;
let clickedStars = 0;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Definindo posições aleatórias
    const randomX = Math.random() * 90; // Para garantir que a estrela fique dentro da tela
    const randomY = Math.random() * 90;

    star.style.position = 'absolute';
    star.style.left = `${randomX}vw`;
    star.style.top = `${randomY}vh`;

    star.addEventListener('click', () => {
        star.classList.add('hidden');
        clickedStars++;
        if (clickedStars === numStars) {
            showInvitation();
        }
    });

    starsContainer.appendChild(star);
}

function showInvitation() {
    message.textContent = "Parabéns! Você encontrou todas as estrelas e ganhou um encontro comigo. Uhuuuul!!! Volte agora para o direct do instagram para podermos marcar.";
}

// Criar estrelas
for (let i = 0; i < numStars; i++) {
    createStar();
}

