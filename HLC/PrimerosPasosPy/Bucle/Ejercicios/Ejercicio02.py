try:
    numeroInicial = int(input("Introduce le primer numero del rango"))
    numeroFinal = int(input("Introduce le ultimo numero del rango"))
    for contador in range(numeroInicial,numeroFinal):
        while contador < numero:
            if numero % contador == 0:
                solucion = "NO"
                break
            contador += 1

except:
    print("Numero introducido no valido")

numero = int(input("Introduce un número: "))

    # if numero < 2:
    #     solucion = "NO"
    # else:
    #     solucion = "SI"
    #     contador = 2
    #     while contador < numero:
    #         if numero % contador == 0:
    #             solucion = "NO"
    #             break
    #         contador += 1

    # print(solucion)