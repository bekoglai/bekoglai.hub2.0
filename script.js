function rickroll() {
    // Переход по ссылке с рикроллом
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
function unlockSecret() {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.classList.remove('hidden');
}
function showMagic() {
    const magicMessage = document.getElementById('magic-message');
    magicMessage.classList.remove('hidden');
}
function startGame() {
    document.body.style.transition = 'background-color 0.5s ease';
    let colors = ['#ff6347', '#32cd32', '#1e90ff', '#ff1493', '#ffa500'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    setTimeout(() => {
        alert('Ты играешь! Но на самом деле это просто эффект 😂');
    }, 1000);
}
const pet = document.getElementById('pet');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    pet.style.left = mouseX + 'px';
    pet.style.top = mouseY + 'px';

    if (mouseX > window.innerWidth / 2) {
        pet.style.animation = 'petMood 0.5s infinite';
    } else {
        pet.style.animation = '';
    }
});
function teleport() {
    window.location.href = "https://pornhub.com";  // Замените ссылку на ту, куда хотите перенести пользователя
}
function playSound() {
    let audio = new Audio('https://uwupad.me/sound/9297#');  // Замените на свой звуковой файл
    audio.play();
}
const magneticButton = document.querySelector('.magnetic-button button');
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    magneticButton.style.left = mouseX + 'px';
    magneticButton.style.top = mouseY + 'px';
});
