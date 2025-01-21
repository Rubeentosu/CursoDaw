try:
    letra = input("Introduce una letra: ")
    if letra[0] == letra.upper()[0]:
        print("La letra",letra[0],"es mayuscula")
    else:
        print("La letra",letra[0],"es minuscula")

except:
    print("La letra no es correcta")