try:
    dia = int(input("Introduce el dia: "))
    mes = int(input("Introduce el mes: "))

    if (dia >= 1 and dia <= 31) and (mes >= 1 and  mes <= 12):
        if (dia >= 21 and mes ==3) or (dia >= 19 and mes == 4):
            print("Aries")
        elif (dia >= 20 and mes ==4) or (dia <= 20 and mes == 5):
            print("Tauro")
        elif (dia >= 21 and mes ==5) or (dia <= 20 and mes == 6):
            print("Géminis")
        elif (dia >= 21 and mes ==6) or (dia <= 22 and mes == 7):
            print("Cancer")
        elif (dia >= 23 and mes ==7) or (dia <= 22 and mes == 8):
            print("Leo")
        elif (dia >= 23 and mes ==8) or (dia <= 22 and mes == 9):
            print("Virgo")
        elif (dia >= 23 and mes ==9) or (dia <= 22 and mes == 10):
            print("Libra")
        elif (dia >= 23 and mes ==10) or (dia <= 21 and mes == 11):
            print("Escorpio")
        elif (dia >= 22 and mes ==11) or (dia <= 21 and mes == 12):
            print("Sagitario")
        elif (dia >= 22 and mes ==12) or (dia <= 19 and mes == 1):
            print("Capricornio")
        elif (dia >= 20 and mes ==1) or (dia <= 18 and mes == 2):
            print("Acuario")
        elif (dia >= 19 and mes ==2) or (dia <= 20 and mes == 3):
            print("Piscis")
    else:
        print("Dia o mes introducido no es correcto")

except:
    print("No has introducido un numero")