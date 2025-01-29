import java.util.ArrayList;
import java.util.List;

// Clase Mesa
class Mesa {
    private int numero;
    private int capacidad;
    private boolean disponible;

    public Mesa(int numero, int capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
        this.disponible = true;
    }

    public void reservar() {
        this.disponible = false;
    }

    public void liberar() {
        this.disponible = true;
    }

    public boolean estaDisponible() {
        return this.disponible;
    }

    public int getCapacidad() {
        return this.capacidad;
    }

    @Override
    public String toString() {
        return "Mesa n" + this.numero + " (Capacidad: " + this.capacidad + ")";
    }
}

// Clase Cliente
class Cliente {
    private String nombre;
    private String telefono;

    public Cliente(String nombre, String telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "Nombre: " + this.nombre + ", Teléfono: " + this.telefono;
    }
}

// Clase Reserva
class Reserva {
    private Cliente cliente;
    private Mesa mesa;
    private String fechaHora;

    public Reserva(Cliente cliente, Mesa mesa, String fechaHora) {
        this.cliente = cliente;
        this.mesa = mesa;
        this.fechaHora = fechaHora;
    }

    @Override
    public String toString() {
        return "Cliente: " + this.cliente + ", " + this.mesa + ", Fecha y Hora: " + this.fechaHora;
    }
}

// Clase Restaurante
class Restaurante {
    private String nombre;
    private List<Mesa> mesas;
    private List<Reserva> reservas;

    public Restaurante(String nombre) {
        this.nombre = nombre;
        this.mesas = new ArrayList<>();
        this.reservas = new ArrayList<>();
    }

    public void agregarMesa(Mesa mesa) {
        this.mesas.add(mesa);
    }

    public List<Mesa> mostrarMesasDisponibles() {
        List<Mesa> mesasDisponibles = new ArrayList<>();
        for (Mesa mesa : this.mesas) {
            if (mesa.estaDisponible()) {
                mesasDisponibles.add(mesa);
            }
        }
        return mesasDisponibles;
    }

    public Reserva hacerReserva(Cliente cliente, int capacidadRequerida, String fechaHora) {
        List<Mesa> mesasDisponibles = this.mostrarMesasDisponibles();
        for (Mesa mesa : mesasDisponibles) {
            if (mesa.getCapacidad() >= capacidadRequerida) {
                mesa.reservar();
                Reserva reserva = new Reserva(cliente, mesa, fechaHora);
                this.reservas.add(reserva);
                return reserva;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        // Crear un restaurante
        Restaurante restaurante = new Restaurante("El Puchero");

        // Agregar mesas al restaurante
        restaurante.agregarMesa(new Mesa(1, 4));
        restaurante.agregarMesa(new Mesa(2, 2));

        // Crear un cliente
        Cliente cliente1 = new Cliente("Juan", "123456789");

        // Hacer una reserva
        Reserva reserva = restaurante.hacerReserva(cliente1, 4, "2025-05-20 20:00");

        // Mostrar la reserva
        if (reserva != null) {
            System.out.println("Reserva realizada: " + reserva);
        } else {
            System.out.println("No hay mesas disponibles");
        }
    }
}