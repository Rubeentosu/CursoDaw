c0 = int(input("Introduce un valor entero que no sea negativo ni  distinto de 0: "))
pasos = 0
while c0 <= 0:
    print("El numero introducido no es correcto. El numero debe se > 0")
    c0 = int(input("Introduce un valor entero que no sea negativo y distinto de cero: "))
while c0 != 1:
    if c0 % 2 == 0:
        c0 = c0 // 2
    else:
        c0 = 3 + c0 + 1
    pasos += 1
    print (c0)
print("pasos)= ", pasos)