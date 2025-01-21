try:
    numero1 = float(input("Introduce un numero: "))
    numero2 = float(input("Introduce otro numero: "))

    #El doble del segundo número
    print("El doble del segundo numero es:",numero2*2)

    #La tercera parte del primer número
    print("La tercera parte del primer número es:",numero1/3)

    #El cuadrado de la suma de ambos números,
    sumaNumeros = numero1+ numero2
    print("El cuadrado de la suma de ambos números es: ",sumaNumeros**2)

    #La décima parte de la suma de los cuadrados de ambos números.
    print("La décima parte de la suma de los cuadrados de ambos números: ",(numero1**2 + numero2**2)/10)
except:
    print("No se proporcionado el numero por teclado correcto")