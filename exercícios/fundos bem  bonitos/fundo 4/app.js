const canvas = document.getElementById('fundoAnimado');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configurações
const PARTICULAS = 150;
const MAX_DIST = 150; // distância para conectar linhas
const PARTICULA_SIZE = 3;
const SPEED = 1.5;

// Partículas
const particulas = [];
for(let i=0; i<PARTICULAS; i++){
    particulas.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        dx: (Math.random()-0.5)*SPEED,
        dy: (Math.random()-0.5)*SPEED,
        r: Math.random()*PARTICULA_SIZE+1,
        color: `hsl(${Math.random()*360}, 100%, 60%)`
    });
}

// Mouse interativo
const mouse = {x: null, y: null};
canvas.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
});
canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

// Função de animação
function animar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // desenha partículas
    particulas.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        // rebater nas bordas
        if(p.x <0 || p.x>canvas.width) p.dx*=-1;
        if(p.y <0 || p.y>canvas.height) p.dy*=-1;

        // glow intenso
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        ctx.fill();
    });

    // linhas entre partículas próximas
    for(let i=0;i<particulas.length;i++){
        for(let j=i+1;j<particulas.length;j++){
            const dx = particulas[i].x - particulas[j].x;
            const dy = particulas[i].y - particulas[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist<MAX_DIST){
                ctx.strokeStyle = `rgba(0,255,255,${1 - dist/MAX_DIST})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particulas[i].x, particulas[i].y);
                ctx.lineTo(particulas[j].x, particulas[j].y);
                ctx.stroke();
            }
        }
    }

    // efeito mouse: partículas se atraem
    if(mouse.x && mouse.y){
        particulas.forEach(p=>{
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist<200){
                p.x += dx/80;
                p.y += dy/80;
            }
        });
    }

    requestAnimationFrame(animar);
}

animar();

// ajusta canvas ao redimensionar
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});