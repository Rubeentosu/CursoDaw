# Indicar al usuario que ingrese una palabra
# y asignarlo a la variable userWord.
userWord = input("Ingresa una palabra: ")
userWord = userWord.upper()
for espacio in userWord:
    # Completa el cuerpo del ciclo for.
    if espacio == " ":
        continue
    else:
        print(espacio)