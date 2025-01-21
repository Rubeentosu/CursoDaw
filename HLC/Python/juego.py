import random

numeroSecreto=random.randint(0,1000)

print(
"""
+==================================+
| Bienvenido a mi juego, muggle!   |
| Introduce un número entero       |
| y adivina qué número he          |
| elegido para ti.                 |
| Entonces,                        |
| ¿Cuál es el número secreto?      |
+==================================+
""")


# Ingresa el primer valor
numero = int(input ("Introduce un número:"))

while numero != numeroSecreto:
    if numero > numeroSecreto:
        print("El numero es menor")
    else:
        print("El numero es mayor")
    numero = int (input("Introduce un número:"))

print("¡Ole, ese es el numero!", numeroSecreto)