def menu():
    print("FICHAJES")
    print("1. Añadir jugador")
    print("2. Eliminar jugador")
    print("3. Mostrar jugadores")#por lineas
    print("4. Ver si jugador esta fichado")
    print("5. Ordenar lista") #orden alfabético
    print("6. Salir")

def añadirjugador(lista):
    print("Para anadir un jugador introduce lo siguiente")
    jugador = input("Nombre: ")
    lista.append(jugador)
    return lista

def verLista(lista):
    print("Los jugadores fichados son: \n")
    for valor in lista:
        return print(valor)

def main():
    salir = True
    listaJ = []
    while salir:
        menu()
        opcion = input("Selecciona una opción (1-5): ")
        
        if opcion == '6':
            print("Saliendo de los fichajes...")
            salir = False

        if opcion == '1' or opcion == '2' or opcion == '3' or opcion == '4' or opcion == '5':
                if opcion == '1':
                    añadirjugador(listaJ)
                elif opcion == '2':
                    print()
                elif opcion == '3':
                    verLista(listaJ)
                elif opcion == '4':
                    print()
                elif opcion == '5':
                    print()

main()