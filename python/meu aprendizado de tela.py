import pygame

pygame.init()

#tamahno da janela

janela=pygame.display.set_mode((800,700))
# título da janela

pygame.display.set_caption(" my game")
# colocarr imagem de fundo
imagem_fundo=pygame.image.load("C:/Users/danil/OneDrive/Imagens/Daniscarline/20240804_111821.jpg")
nave_player=pygame.image.load("C:/Users/danil/Pictures/images.jpeg")
# posição da nave

pos_x_player=500
pos_y_player=250
va_nave= 10
# loop, serve para manter a janela aberta
loop= True

while loop:
    for evento in pygame.event.get():
        # fechar a  janela com o comando 
        
        if  evento.type == pygame.QUIT:
            loop=False
    if teclas[pygame.K_UP]:   
     pos_y_player-=va_nave 
    #inserir imagem na  janela 

    janela.blit(imagem_fundo,(0,0))
    janela.blit(nave_player,(pos_y_player, pos_x_player))




    pygame.display.update()
pygame.quit()