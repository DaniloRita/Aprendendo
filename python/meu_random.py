import random
# Lista de perguntas e respostas
lista_de_perguntas=[
    {"pergunta":"1)Como se chamava o país onde Jesus viva? ","resposta":"palestina"},
    {"pergunta":"2)Qual é a nacionalidade dos que nasceram em Palestina? ","resposta":"judia"}]
# embaralhar as perguntas 
random.shuffle(lista_de_perguntas)

pontos=0
print("\n")
print("\n 🎇🎇🎆🎆Bem-Vindo ao nosso jogo de Bíblia🎆🎆🎇🎇 \n ")

for item in lista_de_perguntas:
    resposta=input(item["pergunta"]+" ").lower()

    if resposta== item["resposta"]:
        print(" 🎆Acertaste, +1 ponto \n")
        pontos+=1
    else:
        print("😏 Erraste, a resposta certa é, {}".format(item["resposta"]))
print("A tua pontução final é de {} pontos".format(pontos))
