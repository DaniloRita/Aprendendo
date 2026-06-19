    //MENU   
       const menu = document.getElementById("menu");

        function toggleMenu() {
            menu.classList.toggle('show');
        }


        //RESOLVER EQUAÇÃO
        function resolverEquacao(){
            const a = parseFloat(document.getElementById('a'). value)
            const b = parseFloat(document.getElementById('b'). value)
            const c = parseFloat( document.getElementById('c'). value)
            const resultado = document.getElementById('resultado')

            if ( isNaN(a) || a===0){
                resultado.innerHTML="O coefiente 'a' deve ser diferente de 0!";
                return;
            }
            //variável para armazenar o passo a passo
            let passoApasso=`<br><b>Equação:${a}x² + ${b}x + ${c} = 0</b><br><br>`

            //VERIFICAR SE É INCOMPLETA 
            if (  b===0 && c!==0){
                //forma ax²+c=0
            const x2= -c/a
            if (x2<0){
                passoApasso +=`Não há raízes reais`
                resultado.innerHTML= passoApasso 
            }else{
                const x=Math.sqrt(x2)
                passoApasso += `x² = -c/a = -(${c})/${a} = ${x2}<br>`;
            passoApasso += `Raízes: x₁ = ${x} ; x₂ = ${-x}`;
            resultado.innerHTML = passoApasso;
            }  
            return
        }
            if (c===0 && b!==0){
                // forma: ax2 + bx =0
                const x1=0
                const x2=-b/a
                passoApasso +=`Fatorando x: x(ax + b) = 0 <br>`
                passoApasso +=`Raízes: x₁ = ${x1} ; x₂ = ${x2}`;
                resultado.innerHTML= passoApasso
                return
            }

            if (c===0 && b===0){
                //forma: ax2=0
                passoApasso += 'Raiz única:x=0'
            resultado.innerHTML= passoApasso 
            return}

            //caso seja Completa (a≠0, b≠0, c≠0)
            const delta = b*b-4*a*c;
            passoApasso += `1️⃣ Calcular Δ (delta):<br>`;
    passoApasso += `Δ = b² - 4ac = (${b})² - 4*${a}*${c} <br>`;
    passoApasso += `Δ= (${b})² - 4*${a}*${c}<br> `
    passoApasso += `Δ= ${delta}`
                //INTERPRETANDDO DELTA
            if (delta <0){
                pass
            passoApasso += '<br>2️⃣ Como Δ < 0, a equação não possui raízes reais.<br>`;'
                resultado.innerHTML= passoApasso 
            } else if (delta ===0){
                const x = -b/(2*a)
                passoApasso += `3️⃣ Aplicando a fórmula resolvente: x = -b / (2a) = -(${b}) / (2*${a}) = ${x}<br>`;

                resultado.innerHTML= passoApasso 
            }else if (delta > 0){
                passoApasso += `<br>2️⃣ Como Δ > 0, a equação possui <b>duas raízes reais diferentes</b>.<br> <br>`;
                //CALCULANDO RAIZES
                const x1 = (-b+ Math.sqrt(delta))/(2*a)
                const x2 = (-b- Math.sqrt(delta))/(2*a)
                passoApasso += `3️⃣ Aplicando a fórmula resolvente:<br>`;
        passoApasso += `x₁ = (-b + √Δ) / (2a)<br>`;
        passoApasso +=`x₁= (-(${b}) + √${delta}) / (2*${a})<br>`
        passoApasso += `x₁= ${x1} <br> <br>`
        passoApasso += `x₂ = (-b - √Δ) / (2a)<br>`;
        passoApasso +=`x₂= (-(${b}) - √${delta}) / (2*${a})<br> `
        passoApasso += `x₂= ${x2}<br>`
                  resultado.innerHTML = passoApasso 
        
            }
        }
        function limparCampos(){
            document.getElementById('a').value=''
            document.getElementById('b').value=''
            document.getElementById('c').value=''
            document.getElementById('resultado').innerHTML=''
        }
        const canvas = document.getElementById('fundoAnimado');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Criar partículas (círculos)
const numCirculos = 80;
const circulos = [];

for (let i = 0; i < numCirculos; i++) {
    circulos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
    });
}

// Função de animação
function animarFundo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    requestAnimationFrame(animarFundo);
}

animarFundo();

// Ajusta canvas quando a janela muda de tamanho
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
