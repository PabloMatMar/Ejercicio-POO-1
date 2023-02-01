// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    detalles() {
        console.log(`Esta persona tiene el nombre: ${this.nombre}. Su edad es ${this.edad}. Su género es:${this.genero}.`);
    }
}

let newPerson = new Persona("Pablo", 33, "masculino");
newPerson.detalles();
// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona{
    constructor(curso, grupo, nombre, edad, genero) {
        super(nombre, edad, genero) // Llama al constructor del padre
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`Este estudiante cursa: ${this.curso}. Su grupo es ${this.grupo}.`);
    }
};

let newEstudiante = new Estudiante("Pablo", 33, "masculino", "tercero", "fullstack");
newEstudiante.registrar()
// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona{
    constructor(asignatura, nivel, nombre, edad, genero) {
        super(nombre, edad, genero) // Llama al constructor del padre
        this.asignatura = asignatura;
        this.nivel = nivel;
        this.asignar = this.asignar;
    }

    asignar() {
        console.log(`Este profesor es: ${this.asignatura}. Su nivel edad es: ${this.nivel}.`);
    }
};

let newProfesor = new Profesor("Alex", "?", "masculino", "FullStack", "Master");
newProfesor.asignar()