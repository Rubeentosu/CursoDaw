try:
    #Ejercicio 4: Análisis de un número
    numero = int(input("Introduce un numero: "))

    #Forma lenta
    #if(numero == 0):print("El numero es cero: ",True)
    #else: print("El numero es cero: ",False)

    #if(numero >= 0): print("El numero es positivo: ",True)
    #else: print("El numero es positivo: ",False)

    #if(numero <=100): print("El numero es menor que 100: ",True)
    #else: print("El numero es menor que 100: ",False)

    #if(numero % 2 == 0): print("El numero es par: ",True)
    #else: print("El numero es par: ",False)

    print("El numero es 0",(numero==0))
    print("El numero es positivo: ",(numero >= 0))
    print("El numero es menor que 100: ",(numero <=100)) 
    print("El numero es par: ",(numero % 2 == 0)) 
except :
    print("El no es correcto")
