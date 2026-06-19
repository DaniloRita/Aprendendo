import random
# Lista de perguntas e respostas
lista_de_perguntas=[
    {"pergunta":"↦Como se chamava o país onde Jesus viva? ","resposta":"palestina"},
    {"pergunta":"↦Qual é a nacionalidade dos que nasceram em Palestina? ","resposta":"judia"},
    {"pergunta":"↦Como se chamava o império que havia dominado no tempo da Palestina? ","resposta":"romano"},
    {"pergunta":"↦Como se chama o garnde mar que fica no centro do Império Romano? ","resposta":"mar mediterrâneo"},
    {"pergunta":"↦Quantos KM havia entre Roma e Palestina? ","resposta":("2500" or "2500 km")},
    {"pergunta":"↦Qual é o reino que sempre se opõe ao reino dos céus? ","resposta":" reino de satanás" },
    {"pergunta":"↦Qual é a passagem bíblica que nos ensina buscar primeiro o reino de Deus? ","resposta":"mateus 6:33"},
    {"pergunta":"↦Nomeie duas característica do Reino dos Céus? ","resposta":"alegria e paz " or " paz e alegria"},
    {"pergunta":"↦Qual é a Capital da Palestina? ","resposta":"judeia"},
    {"pergunta":"↦Qual é a cidadezinha onde Jesus nasceu? ","resposta":"belém"},
    {"pergunta":"↦Qual dos evangrlho dá a geneologia de Maria? ","resposta":"lucas"}
]
# embaralhar as perguntas 
random.shuffle(lista_de_perguntas)

pontos=0
print("\n")
print("\n 🎇🎇🎆🎆Bem-Vindo ao nosso jogo de Bíblia🎆🎆🎇🎇 \n ")

for item in lista_de_perguntas:
    resposta=input(item["pergunta"]+" ").lower()

    if resposta== item["resposta"]:
        print(" 🎆Acertaste, +1 ponto🎆. \n")
        pontos+=1
    else:
        print("😏 Erraste, a resposta certa é, {} \n".format(item["resposta"]))

if pontos >= 7:        
   print("👉🏼 Muito bom atingiste {} pontos...👈🏼 \n".format(pontos))
elif pontos > 4:
    print("Precisas estudar mais, atingiste {} pontos \n".format(pontos))
else:
    print(" Precisas rever a tua vida, só atingiste {} pontos \n".format(pontos))
print (" Programa de Daniscarline Terminado!")