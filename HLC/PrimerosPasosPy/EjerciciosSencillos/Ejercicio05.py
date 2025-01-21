try:
    #Ejercicio 5: Entrenamiento natación
    largos = int(input("Introduce el numero de largos: "))
    metros = int(input("Introduce el numero metros de la piscina: "))
    scroll = 0
    espalda = 0
    if(largos % 2 == 0): 
        scroll = largos / 2
        espalda = largos / 2
    else: 
        scroll = (largos//2)+1
        espalda = (largos-1)/2

    print("El numero largos en scroll es",scroll," y de metros es: ",(scroll * metros))
    print("El numero largos en espalda es",scroll," y de metros es: ",(espalda * metros))
    print("Numeros de largos en total es: ",largos*metros/100,"km")    
except :
    print("El numero introducido no es correcto")
