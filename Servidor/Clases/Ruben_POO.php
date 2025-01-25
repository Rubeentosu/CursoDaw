<?php
class Empleado {
    private $nombre;
    private $edad;
    private $salario;

    public function __construct($nombre, $edad, $salario) {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->salario = $salario;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getEdad() {
        return $this->edad;
    }
    
    public function setEdad($edad) {
        $this->edad = $edad;
    }

    public function getSalario() {
        return $this->salario;
    }

    public function setSalario($salario) {
        $this->salario = $salario;
    }

    
    public function mostrarDetalles() {
        return "Nombre: " . $this->nombre . ", Edad: " . $this->edad . ", Salario: " . $this->salario;
    }
}

class EmpleadoRemoto extends Empleado {
    private $horasConexion;

    // Constructor
    public function __construct($nombre, $edad, $salario, $horasConexion) {
        parent::__construct($nombre, $edad, $salario);
        $this->horasConexion = $horasConexion;
    }

    // Getter y Setter para horasConexion
    public function getHorasConexion() {
        return $this->horasConexion;
    }

    public function setHorasConexion($horasConexion) {
        $this->horasConexion = $horasConexion;
    }

    public function trabajar() {
        return "El empleado remoto " . $this->getNombre() . " está trabajando durante " . $this->horasConexion . " horas.";
    }

    public function mostrarDetalles() {
        return "Nombre: " . $this->getNombre() . ", Edad: " . $this->getEdad() . ", Salario: " . $this->getSalario(). ", Horas: ".$this->getHorasConexion();
    }
}
$empleado1 = new Empleado("Nombre1",23,2300.30);
$empleado2 = new EmpleadoRemoto("Nombre2",35,4500.05,30);

echo $empleado1 -> mostrarDetalles();
echo "<br>";
echo $empleado2 -> trabajar();
echo "<br>";
echo $empleado2 -> mostrarDetalles();
?>
