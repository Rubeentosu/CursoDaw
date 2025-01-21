try:
    #Ejercicio 3: Volumen de una pirámide
    altura = int(input("Introduce la altura de la pirámide en metros: "))
    ladoBase = int(input("Introduce la longitud del lado de la base en metros: "))

    base = ladoBase*ladoBase
    volumen = 1/3*base*altura
    print("El volumen de una piramide es: ",volumen)
except :
    print("Altura o lado de la base de la piramide no es correcta")

print("Este volumen equivale a",volumen/2500,"piscinas")
