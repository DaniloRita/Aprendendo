const canvas = document.getElementById('fundoAnimado');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numCirculos = 100;
const circulos = [];

for (let i = 0; i < numCirculos; i++) {
    circulos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        color: `hsl(${Math.random()*360}, 100%, 50%)`,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5
    });
}

function animarFundo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha círculos
    circulos.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = c.color;
        ctx.fill();

        c.x += c.dx;
        c.y += c.dy;

        // Reaparece do outro lado
        if (c.x < 0) c.x = canvas.width;
        if (c.x > canvas.width) c.x = 0;
        if (c.y < 0) c.y = canvas.height;
        if (c.y > canvas.height) c.y = 0;
    });

    // Conectar partículas próximas
    for (let i = 0; i < numCirculos; i++) {
        for (let j = i + 1; j < numCirculos; j++) {
            const dx = circulos[i].x - circulos[j].x;
            const dy = circulos[i].y - circulos[j].y;
            const distancia = Math.sqrt(dx*dx + dy*dy);
            if (distancia < 120) { // distancia para conectar
                ctx.beginPath();
                ctx.moveTo(circulos[i].x, circulos[i].y);
                ctx.lineTo(circulos[j].x, circulos[j].y);
                ctx.strokeStyle = `rgba(255,255,255,${1 - distancia/120})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animarFundo);
}

animarFundo();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});