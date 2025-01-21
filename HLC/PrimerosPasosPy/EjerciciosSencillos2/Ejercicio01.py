try:
    numero = int(input("Introduce un numero: "))

    if numero % 10 == 0:
        print("El numero es multiplo de 10")
    else:  print("El numero no es multipo de 10")
except:
    print("El numero introducido no es correcto")