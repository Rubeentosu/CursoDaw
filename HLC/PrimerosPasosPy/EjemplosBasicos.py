#Pedir los goles y partidos y sacar el promedio de goles
totalGoles = int(input("El numero de goles es "))
totalPartidos = int(input("El total de partidos es "))
promedio= totalGoles/totalPartidos
print(round(promedio))

#Dado un resultado final de un partido(goles a favor y en contra), calcula la diferencia de goles usando el valor absoluto
golesFavor = input("Los goles a favor son: ")
golesContra = input("Los goles en contra es: ")