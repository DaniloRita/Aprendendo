lista_perguntas=str(["1)Como se chamava o país onde Jesus vivia",
          "2) Qual é a nacionalidade de Jesus? ",
          "3) como se chamava o Império qua havia dominado a Palestina no tempo de Jesus?"])
lista_repostas=str(["palestina",
         "judia",
         "romano"])
pontos=0
for pergunta in lista_perguntas:
    print(lista_pergunta[pergunta])
    lista_resposta=input("Resposta")
    if lista_resposta==lista_resposta[pergunta]:
        print(" acertaste ")
        pontos=pontos+1
    else:
        print(" erraste")



