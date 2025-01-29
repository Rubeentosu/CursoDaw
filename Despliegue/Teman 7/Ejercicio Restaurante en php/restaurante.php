<?php 
/**
 * Clase Mesa
 * 
 * Representa una mesa de un restaurante
 */
class mesa {
    /**
     * Número de la mesa
     * 
     * @property int $numero Número de la mesa
     * @property int $capacidad Capacidad de la mesa
     * @property bool $disponible Indica si la mesa está disponible o no
     */
    private $numero;
    private $capacidad;
    private $disponible;

    /**
     * Constructor de la clase
     * 
     * @param int $numero Número de la mesa
     * @param int $capacidad Capacidad de la mesa
     */
    public function __construct($numero, $capacidad){
        $this->numero = $numero;
        $this->capacidad = $capacidad;
        $this->disponible = true;
    }

    /**
     * Reserva la mesa
     * 
     * Cambia el estado de la mesa a no disponible
     * 
     * @return void
     */
    public function reservar(){
        $this->disponible = false;
    }

    /**
     * Libera la mesa
     * 
     * Cambia el estado de la mesa a disponible
     * 
     * @return void
     */
    public function liberar(){
        $this->disponible = true;
    }

    /**
     * Comprueba si la mesa está disponible
     * 
     * @return bool Devuelve true si la mesa está disponible, false en caso contrario
     */
    public function estaDisponible(){
        return $this->disponible;
    }

    /**
     * Devuelve la capacidad de la mesa
     * 
     * @return int Capacidad de la mesa
     */
    public function getCapacidad(){
        return $this->capacidad;
    }

    /**
     * Devuelve una representación en forma de cadena de la mesa
     * 
     * @return string Representación en forma de cadena de la mesa
     */
    public function __toString(){
        return "Mesa n" . $this->numero . " (Capacidad: " . $this->capacidad . ")";
    }
}

/**
 * Clase Cliente
 * 
 * Representa un cliente de un restaurante
 */
class cliente {
    /**
     * Nombre del cliente
     * 
     * @property string $nombre Nombre del cliente
     * @property string $telefono Teléfono del cliente
     */
    private $nombre;
    private $telefono;

    /**
     * Constructor de la clase
     * 
     * @param string $nombre Nombre del cliente
     * @param string $telefono Teléfono del cliente
     */
    public function __construct($nombre, $telefono){
        $this->nombre = $nombre;
        $this->telefono = $telefono;
    }

    /**
     * Devuelve una representación en forma de cadena del cliente
     * 
     * @return string Representación en forma de cadena del cliente
     */
    public function __toString(){
        return "Nombre: " . $this->nombre . ", Teléfono: " . $this->telefono;
    }
}
/**
 * Clase Reserva
 * 
 * Representa una reserva de un cliente en un restaurante
 */

class reserva {
    /**
     * Cliente de la reserva
     * 
     * @property cliente $cliente Cliente de la reserva
     * @property mesa $mesa Mesa de la reserva
     * @property string $fechaHora Fecha y hora de la reserva
     */
    private $cliente;
    private $mesa;
    private $fechaHora;

    /**
     * Constructor de la clase
     * 
     * @param cliente $cliente Cliente de la reserva
     * @param mesa $mesa Mesa de la reserva
     * @param string $fechaHora Fecha y hora de la reserva
     */
    public function __construct($cliente, $mesa, $fechaHora){
        $this->cliente = $cliente;
        $this->mesa = $mesa;
        $this->fechaHora = $fechaHora;
    }

    /**
     * Devuelve una representación en forma de cadena de la reserva
     * 
     * @return string Representación en forma de cadena de la reserva
     */
    public function __toString(){
        return "Cliente: " . $this->cliente . ", " . $this->mesa . ", Fecha y Hora: " . $this->fechaHora;
    }
}

/**
 * Clase Restaurante
 * 
 * Representa un restaurante
 */
class restaurante {

    /**
     * Nombre del restaurante
     * 
     * @property string $nombre Nombre del restaurante
     * @property array $mesas Mesas del restaurante
     * @property array $reservas Reservas del restaurante
     */
    private $nombre;
    private $mesas;
    private $reservas;

    /**
     * Constructor de la clase
     * 
     * @param string $nombre Nombre del restaurante
     */
    public function __construct($nombre){
        $this->nombre = $nombre;
        $this->mesas = array();
        $this->reservas = array();
    }

    /**
     * Agrega una mesa al restaurante
     * 
     * @param mesa $mesa Mesa a agregar
     * @return void
     */
    public function agregarMesa(mesa $mesa){
        $this->mesas[] = $mesa;
    }

    /**
     * Muestra las mesas disponibles
     * 
     * @return array Mesas disponibles
     */
    public function mostrarMesasDisponibles(){
        $mesasDisponibles = array();
        foreach($this->mesas as $mesa){
            if($mesa->estaDisponible()){
                $mesasDisponibles[] = $mesa;
            }
        }
        return $mesasDisponibles;
    }

    /**
     * Hace una reserva en el restaurante
     * 
     * @param cliente $cliente Cliente que hace la reserva
     * @param int $capacidadRequerida Capacidad requerida
     * @param string $fechaHora Fecha y hora de la reserva
     * @return reserva Reserva realizada
     */
    public function hacerReserva(cliente $cliente, $capacidadRequerida, $fechaHora){
        $mesasDisponibles = $this->mostrarMesasDisponibles();
        foreach($mesasDisponibles as $mesa){
            if($mesa->getCapacidad() >= $capacidadRequerida){
                $mesa->reservar();
                $reserva = new reserva($cliente, $mesa, $fechaHora);
                $this->reservas[] = $reserva;
                return $reserva;
            }
        }
        return null;
    }
}

// Crear un restaurante
$restaurante = new restaurante("El Puchero");

// Agregar mesas al restaurante
$restaurante->agregarMesa(new mesa(1, 4));
$restaurante->agregarMesa(new mesa(2, 2));

// Crear un cliente
$cliente1 = new cliente("Juan", "123456789");

// Hacer una reserva
$reserva = $restaurante->hacerReserva($cliente1, 4, "2025-05-20 20:00");

// Mostrar la reserva
if($reserva != null){
    echo "Reserva realizada: " . $reserva;
}else{
    echo "No hay mesas disponibles";
}
?>
