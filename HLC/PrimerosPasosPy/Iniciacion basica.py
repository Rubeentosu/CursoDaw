#Comentario
print("Hola")
anios=10

#Pedir por pantalla
nombreUsuario= input("¿Nombre?")
print("El nombre es "+nombreUsuario,anios)

#Tipo de dato
print(type(anios))

#Es anios un numero
print(isinstance(anios,int))

#Pedir por pantalla y edad mas 10 cambiando edad que seria String a int
edad= input("¿Edad?")
print(int(edad) + 10)

# Comprobar si una cadena es o no un número
s = input('Introduzca un número entero: ')
try: # Comienzo del bloque try
    valorInt = int(s) #Se produce una excepción
    print('Es entero') #Esta línea no se ejecuta
except: # Comienzo del bloque except
    print('No es entero')
print('Hemos terminado') # Esta línea no está dentro de los bloques

# Programa que realiza la suma de dos valores
a = input('numero 1 ') # pedimos el primer número
b = input('numero 2 ') # pedimos el segundo número
suma = int(a) + int (b) # calculamos l