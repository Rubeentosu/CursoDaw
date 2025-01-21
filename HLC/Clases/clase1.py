class Punto:
    def __init__(self,x,y):
        self.y=y
        self.x=x

    def pintarPunto(self):
        print("Coordenada X:",self.x,", Coordenada Y:",self.y)

punto=Punto(4,5)
punto.pintarPunto()