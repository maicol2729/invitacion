const noBtn = document.getElementById('no-btn');

noBtn.addEventListener('mouseover', function() {
    // Mueve el botón a una posición aleatoria si intentan pasar el mouse por encima
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}); 