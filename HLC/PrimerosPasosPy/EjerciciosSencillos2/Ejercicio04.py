try:
    hora = int(input("Introduce una hora: "))

    if hora >= 0 and hora <= 24:
        if hora >= 6 and hora <= 12:
            print("Buenos dias")
        elif hora >= 13 and hora <= 20:
            print("Buenas tardes")
        else:
            print("Buenas noches")
    else:    
        print("La hora introducida no es correcta")

except:
    print("No has introducido un numero")