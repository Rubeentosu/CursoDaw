def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b

def division(a, b):
     return a / b

def calculadora():
    salir = True
    while salir:
        print("\nCALCULADORA\n")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicación")
        print("4. División")
        print("5. Salir")
        
        opcion = input("Selecciona una opción (1-5): ")
        
        if opcion == '5':
            print("Saliendo de la calculadora...")
            salir = False

        if opcion == '1' or opcion == '2' or opcion == '3' or opcion == '4':
            try:
                num1 = float(input("Ingresa el primer número: "))
                num2 = float(input("Ingresa el segundo número: "))
                
                if opcion == '1':
                    print("Resultado:",suma(num1, num2))
                elif opcion == '2':
                    print("Resultado:",resta(num1, num2))
                elif opcion == '3':
                    print("Resultado:",multiplicacion(num1, num2))
                elif opcion == '4':
                    if num2 == 0:
                        print("No se puede dividir entre 0")
                    else: print("Resultado:",division(num1, num2))
            except:
                print("Error: Por favor, ingresa números válidos.")

# Ejecutar la calculadora
calculadora()
