try:
    numero1 = int(input("Introduce un numero: "))
    numero2 = int(input("Introduce un numero: "))
    if numero1 > numero2:
        print("El numero ",numero1," es mayor que el numero ",numero2)
    elif numero1 < numero2:
        print("El numero ",numero1," es menor que el numero ",numero2)
    else: print("Los numeros son iguales.")
except:
    print("El numero introducido no es correcto")