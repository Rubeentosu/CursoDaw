class Biblioteca:

    def __init__(self):
        self.libros_disponibles =["libro1", "libro2", "libro3"]
        self.libros_prestados = []

    def mostrar_libros_disponibles(self):
        if self.libros_disponibles:
            print("Libros disponibles:")
            for libro in self.libros_disponibles:
                print(libro)
        else:
            print("No hay libros disponibles.")

    def mostrar_libros_prestados(self):
        if self.libros_prestados:
            print("Libros Prestados:")
            for libro in self.libros_prestados:
                print(libro)
        else:
            print("No hay libros prestados.")
    
    def agregar_libro(self, nombreLibro):
        if nombreLibro in self.libros_disponibles:
            print("El libro ya existe en la lista.")
        else:
            self.libros_disponibles.append(nombreLibro)
            print("Libro añadido correctamente.")
        
    def prestar_libro(self, nombreLibro):
        if nombreLibro in self.libros_prestados:
            print("El libro a sido prestado")
        else:
            if nombreLibro in self.libros_disponibles:
                self.libros_prestados.append(nombreLibro)
                self.libros_disponibles.remove(nombreLibro)
                print("El libro pasa a ser prestado")
            else:
                print("El libro no existe")

    def devolver_libro(self,nombreLibro):
        if nombreLibro in self.libros_disponibles:
            print("El libro ya es disponible")
        else:
            if nombreLibro in self.libros_prestados:
                self.libros_disponibles.append(nombreLibro)
                self.libros_prestados.remove(nombreLibro)
                print("El libro pasa a ser disponible")
            else:
                print("El libro no existe")

    def buscar_libro(self,nombreLibro):
        if nombreLibro in self.libros_disponibles:
            print("El libro esta disponible")
        elif nombreLibro in self.libros_prestados:
            print("El libro es prestado")
        else: 
            print("El libro no exite")

    def menu(self):
        print("\nFICHAJES")
        print("1. Añadir libro")
        print("2. Mostrar libros disponibles")
        print("3. Prestar libro")
        print("4. Mostrar libros prestados")
        print("5. Devolver libro")
        print("6. Buscar libro")
        print("7. Salir")

    def menu_funcional(self):
        salir = True
        while salir:
            self.menu()
            opcion = input("Seleccione una opción: ")

            if opcion == '1':
                print("Introduce el nombre del libro")
                nombreLibro = input("Nombre: ")
                self.agregar_libro(nombreLibro)
            elif opcion == '2':
                self.mostrar_libros_disponibles()
            elif opcion == '3':
                print("Introduce el nombre del libro")
                nombreLibro = input("Nombre: ")
                self.prestar_libro(nombreLibro)
            elif opcion == '4':
                self.mostrar_libros_prestados()
            elif opcion == '5':
                print("Introduce el nombre del libro")
                nombreLibro = input("Nombre: ")
                self.devolver_libro(nombreLibro)
            elif opcion == '6':
                print("Introduce el nombre del libro")
                nombreLibro = input("Nombre: ")
                self.buscar_libro(nombreLibro)
            elif opcion == '7':
                print("Saliendo de la biblioteca...")
                salir = True
            else:
                print("Opción no válida, por favor seleccione una opción válida.")

biblioteca = Biblioteca()
biblioteca.menu_funcional()
