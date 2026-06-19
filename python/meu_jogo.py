import pygame
import sys

# Inicializar o Pygame
pygame.init()

# Criar uma janela
largura, altura = 500, 500
tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption("Meu jogo")

# Cor de fundo
cor_fundo = (200, 100, 60)

# Loop principal
rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    tela.fill(cor_fundo)  # Preenche a tela com a cor
    pygame.display.update()

# Encerra o Pygame
pygame.quit()
sys.exit()