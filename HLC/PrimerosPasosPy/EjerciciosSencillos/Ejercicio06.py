try:
    hojas = int(input("Introduce el numero de hojas: "))
    rojo = 0
    verder = 0
    azul = 0

    if(hojas%3 == 1 or hojas%3 == 2):
        rojo = hojas//3 + 1
    else: rojo = hojas//3

    if(hojas%3 == 2):
        verder = hojas//3 + 1
    else: verder = hojas//3

    azul = hojas//3

    print(rojo,"rojo.")
    print(verder,"verdo.")
    print(azul,"azul.")
        
except:
    print("El numero introducido no es correcto")