<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programación Orientada a Objetos</title>
    <style>
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #273343;
            color: #f1ebeb;
        }
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            
        }
    </style>
</head>
<body>
    <header>
        <h2>Programación Orientada a Objetos en PHP</h2>
    </header>
    <br>
    <?php
    //Clase base abstracta 
    abstract class Empleado {
        
        //Declaración de variables
        private String $nombre;
        private int $edad;
        private float $salario;
        
        //Constructor
        public function __construct($nom, $eda, $sal) {
            $this->nombre = $nom;
            $this->edad = $eda;
            $this->salario = $sal;
        }
        
        //Declaración de la función mostrarDetalles()
        public function mostrarDetalles() {
            echo "Nombre: " . $this->nombre . "<br>";
            echo "Edad: " . $this->edad . "<br>";
            echo "Salario: " . $this->salario . "<br>";
        }

        //Función abstracta
        abstract public function trabajar();
        
        //Getter y setter
        public function getNombre() {
            return $this->nombre;
        }
        public function getEdad() {
            return $this->edad;
        }
        public function getSalario() {
            return $this->salario;
        }
        public function setNombre($nom) {
            $this->nombre = $nom;
        }
        public function setEdad($eda) {
            $this->edad = $eda;
        }
        public function setSalario($sal) {
            $this->salario = $sal;
        }
    }
    //Clase hija de empleado
    class EmpleadoRemoto extends Empleado {
        
        //Declaración de variables
        private int $horasConexion;

        //Constructor
        public function __construct($nom, $eda, $sal, $hc) {
            parent::__construct($nom, $eda, $sal);
            $this->horasConexion = $hc;
        }

        //Declaración de la función abstracta heredada
        public function trabajar() {
            echo "El empleado remoto " . $this->getNombre() . " trabaja " . $this->horasConexion . " horas.<br>";
        }

        //Polimorfismo de la función de la clase base empleado mostrarDetalles()
        public function mostrarDetalles() {
            parent::mostrarDetalles();
            echo "Horas de conexión: " . $this->horasConexion . "<br>";
        }

        //Getter y setter
        public function getHorasConexion() {
            return $this->horasConexion;
        }
        public function setHorasConexion($hc) {
            $this->horasConexion = $hc;
        }
    }

    //Clase hija de empleado
    class EmpleadoPresencial extends Empleado {
    
        //Declaración de variables
        private int $horasTrabajadas;

        //Constructor
        public function __construct($nom, $eda, $sal, $ht) {
            parent::__construct($nom, $eda, $sal);
            $this->horasTrabajadas = $ht;
        }

        //Declaración de la función abstracta heredada
        public function trabajar() {
            echo "El empleado presencial " . $this->getNombre() . " trabaja " . $this->horasTrabajadas . " horas.<br>";
        }

        //Polimorfismo de la función de la clase base empleado mostrarDetalles()
        public function mostrarDetalles() {
            parent::mostrarDetalles();
            echo "Horas trabajadas: " . $this->horasTrabajadas . "<br>";
        }

        //Getter y setter
        public function getHorasTrabajadas() {
            return $this->horasTrabajadas;
        }
        public function setHorasTrabajadas($ht) {
            $this->horasTrabajadas = $ht;
        }
    }

    //Instancia de un objeto de la clase EmpleadoRemoto
    $empleado1 = new EmpleadoRemoto("Juan", 30, 1000, 10);
    $empleado1->mostrarDetalles();
    echo "<br>";
    $empleado1->trabajar();

    echo "<hr><br>";

    //Instancia de un objeto de la clase EmpleadoPresencial
    $empleado2 = new EmpleadoPresencial("Ana", 25, 1200, 8);
    $empleado2->mostrarDetalles();
    echo "<br>";
    $empleado2->trabajar();

    ?>
</body>
</html>