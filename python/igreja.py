import pygame
import random

pygame.init()

# Tela
tela = pygame.display.set_mode((1000, 700))
pygame.display.set_caption("Quiz Bíblico")

# Fonte
fonte = pygame.font.SysFont("arial", 36)

# Perguntas
lista_perguntas = [
    {
        "pergunta": "Onde Jesus nasceu?",
        "opcoes": ["A) Belém", "B) Nazaré", "C) Jerusalém", "D) Cafarnaum"],
        "correta": 0
    },
    {
        "pergunta": "Quanto é 5 + 5?",
        "opcoes": ["A) 8", "B) 10", "C) 25", "D) 30"],
        "correta": 1
    }
]
#cor da tela RBG
azul_escuro=(15,10,190)

random.shuffle(lista_perguntas)

indice = 0
acertos = 0
erros = 0

botoes = []
historico = []   # ⬅ AQUI guardamos tudo para mostrar no final


def desenhar_pergunta():
    tela.fill((azul_escuro))

    pergunta = fonte.render(lista_perguntas[indice]["pergunta"], True, (255, 255, 255))
    tela.blit(pergunta, (50, 50))

    botoes.clear()

    for i, opcao in enumerate(lista_perguntas[indice]["opcoes"]):
        rect = pygame.Rect(50, 150 + i * 80, 700, 60)
        botoes.append(rect)
        pygame.draw.rect(tela, (0, 0, 0), rect)

        texto = fonte.render(opcao, True, (205, 205, 255))
        tela.blit(texto, (60, 160 + i * 80))

    pygame.display.update()


def tela_final():
    tela.fill((10, 10, 10))

    titulo = fonte.render("RESULTADO FINAL", True, (255, 255, 255))
    tela.blit(titulo, (380, 20))

    y = 80

    for item in historico:
        pergunta = fonte.render(f"P: {item['pergunta']}", True, (200, 200, 200))
        tela.blit(pergunta, (50, y))

        sua = fonte.render(f"Sua resposta: {item['sua_resposta']}", True, (180, 180, 180))
        tela.blit(sua, (70, y + 30))

        correta = fonte.render(f"Correta: {item['resposta_correta']}", True, (0, 200, 255))
        tela.blit(correta, (70, y + 60))

        if item["acertou"]:
            status = fonte.render("✔ Acertou", True, (0, 255, 0))
        else:
            status = fonte.render("✘ Errou", True, (255, 0, 0))
        tela.blit(status, (70, y + 90))
        vida=fonte.render(" Daniscarline",True,(255,0,0))
        tela.blit(vida,(50,500))

        y += 140  # espaço entre cada pergunta

    pygame.display.update()


rodando = True
final = False
desenhar_pergunta()

while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

        if not final and evento.type == pygame.MOUSEBUTTONDOWN:
            x, y = evento.pos

            for i, botao in enumerate(botoes):
                if botao.collidepoint(x, y):

                    pergunta_atual = lista_perguntas[indice]
                    correta = pergunta_atual["correta"]

                    # Registrar no histórico
                    historico.append({
                        "pergunta": pergunta_atual["pergunta"],
                       "sua_resposta": pergunta_atual["opcoes"][i],
                        "resposta_correta": pergunta_atual["opcoes"][correta],
                        "acertou": i == correta
                    })

                    # Atualizar placar
                    if i == correta:
                        acertos += 1
                    else:
                        erros += 1

                    indice += 1

                    if indice >= len(lista_perguntas):
                        final = True
                        tela_final()
                    else:
                        desenhar_pergunta()

pygame.quit()
