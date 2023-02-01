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

//mayas vs aztecas

class Warrior{
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        console.log(`Este guerrero tiene el poder de: ${this.power}.`);
    }
    defend(damage){
        console.log(life - damage)
    }
}















class Maya extends Warrior{
    constructor(life, power) {
        super(life, power) // Llama al constructor del padre
    }
    

    drink() {

        warriorMaya.power = this.power + 10
        console.log(warriorMaya.power)
    }

    attack() {
        const damage = this.power
        warriorAztec.defend(damage)
    }
    defend(damage){
        warriorMaya.life= this.life - damage
        console.log(warriorMaya)
    }
};

let warriorMaya = new Maya(30, 10);
warriorMaya.drink()


class Aztec extends Warrior{
    constructor(life, power, drinkNesquik) {
        super(life, power) // Llama al constructor del padre
        this.drinkNesquik = drinkNesquik;
    }

    drink() {

        warriorAztec.life = this.life + 10
        console.log(warriorAztec.life)
    }

    attack() {
        const damage = this.power
        warriorMaya.defend(damage)
    }
    defend(damage){
        warriorAztec.life = this.life - damage
        console.log(warriorAztec)
    }
};

let warriorAztec = new Aztec(10, 10);

warriorAztec.drink()
warriorMaya.drink()

warriorMaya.attack()

warriorAztec.attack()


