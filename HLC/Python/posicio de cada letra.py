# Indicar al usuario que ingrese una palabra
# y asignarlo a la variable userWord.
userWord = input("Ingresa una palabra: ")
posicion=0
for letra in userWord:
    # Completa el cuerpo del ciclo for.
    print("La letra con posicion", posicion, "es", letra)
    posicion += 1
