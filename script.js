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
