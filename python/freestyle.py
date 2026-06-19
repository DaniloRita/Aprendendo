import pygame
import random

pygame.init()

# Tela
tela = pygame.display.set_mode((1000, 700))
pygame.display.set_caption("New Game")

# Fonte
fonte = pygame.font.Font(None, 38)

# Estrutura do jogo
lista_de_pergunta = [
    {
        "pergunta": "Onde é que Jesus nasceu?",
        "opcoes": ["A) Belém", "B) Nazaré", "C) Jesrusalém", "D) Cafarnaum"],
        "correta": 0
    },
    {
        "pergunta": "Quanto é 5 + 5?",
        "opcoes": ["A)8", "10", "25", "30"],
        "correta": 1
    }
]

random.shuffle(lista_de_pergunta)

indice = 0
acertos = 0

# Lista de botões
botoes = []


def desenhar_pergunta():
    tela.fill((30, 101, 30))

    pergunta = fonte.render(lista_de_pergunta[indice]["pergunta"], True, (255, 255, 255))
    tela.blit(pergunta, (50, 50))

    botoes.clear()

    for i, opcao in enumerate(lista_de_pergunta[indice]["opcoes"]):
        rect = pygame.Rect(50, 150 + i * 80, 700, 60)
        botoes.append(rect)
        pygame.draw.rect(tela, (80, 80, 200), rect)
        texto = fonte.render(opcao, True, (255, 255, 255))
        tela.blit(texto, (60, 160 + i * 80))

    pygame.display.update()


rodando = True
final=False
desenhar_pergunta()

while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

        if not final and evento.type == pygame.MOUSEBUTTONDOWN:
            x, y = evento.pos
            for i, botao in enumerate(botoes):
                if botao.collidepoint(x, y):

                    if i == lista_de_pergunta[indice]["correta"]:
                        acertos += 1

                    indice += 1

                    if indice >= len(lista_de_pergunta):
                        final = True
                        tela_final()
                    else:
                        desenhar_pergunta()


print("Você acertou:", acertos)
pygame.quit()
