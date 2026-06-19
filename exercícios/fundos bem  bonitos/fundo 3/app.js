// MENU
const menu = document.getElementById("menu");
function toggleMenu(){
    menu.classList.toggle('show');
}

// RESOLVER EQUAÇÃO
function resolverEquacao() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(a) || a === 0) {
        resultado.innerHTML = "O coeficiente 'a' deve ser diferente de 0!";
        return;
    }

    let passoApasso = `Equação: ${a}x² + ${b}x + ${c} = 0<br>`;

    // Equação incompleta
    if (b === 0 && c !== 0) {
        const x2 = -c / a;
        if (x2 < 0) {
            passoApasso += 'Não há raízes reais';
        } else {
            const x = Math.sqrt(x2);
            passoApasso += `x² = -c/a = -(${c})/${a} = ${x2}<br>`;
            passoApasso += `Raízes: x₁ = ${x} ; x₂ = ${-x}`;
        }
        resultado.innerHTML = passoApasso;
        return;
    }

    if (c === 0 && b !== 0) {
        passoApasso += `Fatorando x: x(ax + b) = 0 <br>`;
        passoApasso += `Raízes: x₁ = 0 ; x₂ = ${-b/a}`;
        resultado.innerHTML = passoApasso;
        return;
    }

    if (c === 0 && b === 0) {
        passoApasso += 'Raiz única: x = 0';
        resultado.innerHTML = passoApasso;
        return;
    }

    // Equação completa
    const delta = b*b - 4*a*c;
    passoApasso += `Δ = b² - 4ac = ${b*b} - 4*${a}*${c} = ${delta}<br>`;

    if (delta < 0) {
        passoApasso += 'Não há raízes reais';
    } else if (delta === 0) {
        const x = -b / (2*a);
        passoApasso += `Raiz única: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2*a);
        const x2 = (-b - Math.sqrt(delta)) / (2*a);
        passoApasso += `Raízes: x₁ = ${x1} ; x₂ = ${x2}`;
    }

    resultado.innerHTML = passoApasso;
}

// LIMPAR CAMPOS
function limparCampos() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('resultado').innerHTML = '';
}

// FUNDO ANIMADO PROFISSIONAL 
const canvas = document.getElementById('fundoAnimado');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numCirculos = 120;
const circulos = [];

// Cria as partículas
for (let i = 0; i < numCirculos; i++) {
    circulos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

// Função de animação
function animarFundo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha partículas
    circulos.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = c.color;
        ctx.fill();

        // Movimento
        c.x += c.dx;
        c.y += c.dy;

        // Reaparecer do outro lado
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
            const distancia = Math.sqrt(dx * dx + dy * dy);
            if (distancia < 120) {
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

// Ajusta o canvas se a janela mudar de tamanho
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});