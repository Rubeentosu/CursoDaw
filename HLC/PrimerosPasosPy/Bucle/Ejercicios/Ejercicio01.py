try:
    numero = int(input("Introduce un número: "))

    if numero < 2:
        solucion = "NO"
    else:
        solucion = "SI"
        contador = 2
        while contador < numero:
            if numero % contador == 0:
                solucion = "NO"
                break
            contador += 1

    print(solucion)
except:
    print("Número introducido no válido")


