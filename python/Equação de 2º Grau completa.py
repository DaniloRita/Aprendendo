# programar Equação de 2º grau completa/ fórmula Resolvente

print(" 👌Equação de 2º Grau👌")
print("__________________________________________________________________________________")
a=int(input("Digite o valor de a: "))
b=int(input("Digite o valor de b: "))
c=int(input("Digite o valor de c: "))
delta= (b*b)-(4*a*c)
print(" Δ=",delta)
if delta <0:
    print(" A função não tem uma solução")
    exit()
elif delta == 0:
    print(" A função só tem uma solução")
    x1 = (-b)/(2*a)
    print("x=",x1)
    exit()
else:
    print(" A função tem duas soluções")
x2= ((-b)+(delta**0.5))/(2*a)
x3= ((-b)-(delta**0.5))/(2*a)
print("x1= {} OU x2= {}".format(x2,x3))
print(" Programa de 🎆Daniscarline🎆 Terminado")
exit()
