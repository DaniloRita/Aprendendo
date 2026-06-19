import pygame
import random

# lagura e altura da tela



tela=pygame.display.set_mode((1000,700))

pygame.display.set_caption( "New game")
#fonte= pygame.font.Font(None,36)

# Estrutura do jogo
lista_de_pergunta=[
    {
    "pergunta":"Quanto é 5+7? ",
   "opcoes":["A)10","B)8","C)12","D)14"],
   "correta":2
   },
   {
       "pergunta":"QUnto é 5+5? ",
       "opcoes":["8","10","25","30"],
       "correta":1
   }
   ]
random.shuffle(lista_de_pergunta)
indice=0
acertos=0
rodando=True
final=False

while rodando:
      tela.fill((30,30,30))

      for evento in pygame.event.get():
       if evento.type==pygame.QUIT:
            rodando=False
            
            if not final and evento.type== pygame.MOUSEBUTTONDOWN:
                x,y=evento.pos
                for i,botao in enumerate(botoes):
                    if botao.pygame.collidepoint(x, y):
                        if i ==lista_de_pergunta[indice]["correta"]:
                            acertos += 1
                            indice +=1
                            if indice>= len(lista_de_pergunta):
                                rodando=False
                            if indice < len(lista_de_pergunta):
                                pergunta=fonte.render(lista_de_pergunta[indice]["pergunta"],True,(255,255,255))
                                tela.blit(pergunta,(50,50))
                                botoes=c
                                for i,opcao in enumerate(lista_de_pergunta)[indice]["opcoes"]:
                                    rect=pygame.Rect(50,150 +i*80,700,60)
                                    botoes.append(rect)
                                    pygame.draw.rect(tela,(80,80,200),rect)
                                    texto=fonte.render(opcao,True,(255,255,255))
                                    tela.blit(texto,(60,160 +i*80))
                                    pygame.display.flip()
                                    pygame.quit()
