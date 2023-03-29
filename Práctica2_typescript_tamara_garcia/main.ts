import { Persona } from './personas';
import { Direcciones } from './direcciones';
import { Mails } from './mails';
import { Telefonos } from './telefonos';

// PRIMERA PERSONA:

const direc1Ana = new Direcciones(
  "Calle Lalala",
  22,
  4,
  "B",
  11111,
  "Madrid",
  "Madrid"
)


const mailAna = new Mails(
  "personal",
  "anaanaana@gmail.com"
)

const telfijoAna = new Telefonos(
  "fijo",
  912223344
)

const telmovilAna = new Telefonos(
  "movil",
  612345678
)

const datosAna = new Persona(
  'Ana',
  'Lorem Ipsum',
  33,
  '12345678T',
  new Date(1990, 1, 10),
  'azul',
  'mujer',
  [direc1Ana],
  [mailAna],
  [telfijoAna, telmovilAna],
  "Tiene dos hijas pequeñas"
);

// SEGUNDA PERSONA:

const direc1Pepe = new Direcciones(
  "Calle titititi",
  44,
  6,
  "B",
  33333,
  "Villalba",
  "Madrid"
)

const mailPepe = new Mails(
  "personal",
  "pepepepepepe@gmail.com"
)

const telfijoPepe = new Telefonos(
  "fijo",
  918508500
)

const telmovilPepe = new Telefonos(
  "movil",
  698765432
)

const datosPepe = new Persona(
  'Pepe',
  'Lorem Lorem',
  50,
  '98765432W',
  new Date(1973, 9, 22),
  'verde',
  'hombre',
  [direc1Pepe],
  [mailPepe],
  [telfijoPepe, telmovilPepe],
  "Le gusta irse fuera de la ciudad los fines de semana"
);

// TERCERA PERSONA:

const direc1Carol = new Direcciones(
  "Calle punchin",
  15,
  9,
  "B",
  44444,
  "Alpedrete",
  "Madrid"
)

const mailCarol = new Mails(
  "personal",
  "carolcarolcarol@gmail.com"
)

const telfijoCarol = new Telefonos(
  "fijo",
  918571111
)

const telmovilCarol = new Telefonos(
  "movil",
  623456789
)

const datosCarol = new Persona(
  'Carol',
  'Ipsum Ipsum',
  19,
  '23456789M',
  new Date(2004, 3, 15),
  'naranja',
  'mujer',
  [direc1Carol],
  [mailCarol],
  [telfijoCarol, telmovilCarol],
  "Es libre como un pájaro"
);

console.log("Datos Anteriores:");
console.log(datosAna);
console.log(datosPepe);
console.log(datosCarol);


// Ver Agenda
const agenda: Array<Persona> = new Array(datosAna, datosPepe, datosCarol);

// Buscar DNI y editar datos
const busca_dni: string = "12345678T";
const edita_persona: Persona = agenda.find(persona => persona.dni === busca_dni) as Persona;

const nueva_direc = new Direcciones(
  "Calle segunda",
  8,
  8,
  false,
  99999,
  "Guadarrama",
  "Madrid"
)

const nuevo_mail = new Mails(
  "trabajo",
  "Anaanitaana@hotmail.com"
)

const nuevo_telf = new Telefonos(
  "fijo",
  918549999
)

edita_persona.nueva_direc(nueva_direc);
edita_persona.nuevo_mail(nuevo_mail);
edita_persona.nuevo_telf(nuevo_telf);

console.log("Datos Nuevos:");
console.log(datosAna);
console.log(datosPepe);
console.log(datosCarol);