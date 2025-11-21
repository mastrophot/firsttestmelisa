document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-follower');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.querySelector('.cursor-follower').style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        document.querySelector('.cursor-follower').style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Background Music Logic
document.addEventListener('click', function () {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.volume = 0.5; // Set volume to 50%
        audio.play().catch(error => {
            console.log("Audio play failed:", error);
        });
    }
}, { once: true }); // Run only once
