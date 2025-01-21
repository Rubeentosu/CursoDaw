try:
    print("Introduce lo siguies datos: ")
    nombre = str(input("Nombre: "))
    pApellido = str(input("Primer apellido: "))
    sApellido = str(input("Segundo apellido: "))
    nombre = nombre.upper()
    
    if nombre[0]==nombre[len(nombre)-1] and len(pApellido) == len(sApellido):
        print("Apto")
    else: print("No apto")

except:
    print("error.")