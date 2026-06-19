import pygame
from pygame.locals import *
from sys import exit


pygame.init()
largura=700
altura=500
tela= pygame.display.set_mode((largura, altura))
while true:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            exit()
            pygame.display.update()
