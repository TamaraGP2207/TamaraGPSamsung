"use strict";
exports.__esModule = true;
var personas_1 = require("./personas");
var direcciones_1 = require("./direcciones");
var mails_1 = require("./mails");
var telefonos_1 = require("./telefonos");
// PRIMERA PERSONA:
var direc1Ana = new direcciones_1.Direcciones("Calle Lalala", 22, 4, "B", 11111, "Madrid", "Madrid");
var mailAna = new mails_1.Mails("personal", "anaanaana@gmail.com");
var telfijoAna = new telefonos_1.Telefonos("fijo", 912223344);
var telmovilAna = new telefonos_1.Telefonos("movil", 612345678);
var datosAna = new personas_1.Persona('Ana', 'Lorem Ipsum', 33, '12345678T', new Date(1990, 1, 10), 'azul', 'mujer', [direc1Ana], [mailAna], [telfijoAna, telmovilAna], "Tiene dos hijas pequeñas");
// SEGUNDA PERSONA:
var direc1Pepe = new direcciones_1.Direcciones("Calle titititi", 44, 6, "B", 33333, "Villalba", "Madrid");
var mailPepe = new mails_1.Mails("personal", "pepepepepepe@gmail.com");
var telfijoPepe = new telefonos_1.Telefonos("fijo", 918508500);
var telmovilPepe = new telefonos_1.Telefonos("movil", 698765432);
var datosPepe = new personas_1.Persona('Pepe', 'Lorem Lorem', 50, '98765432W', new Date(1973, 9, 22), 'verde', 'hombre', [direc1Pepe], [mailPepe], [telfijoPepe, telmovilPepe], "Le gusta irse fuera de la ciudad los fines de semana");
// TERCERA PERSONA:
var direc1Carol = new direcciones_1.Direcciones("Calle punchin", 15, 9, "B", 44444, "Alpedrete", "Madrid");
var mailCarol = new mails_1.Mails("personal", "carolcarolcarol@gmail.com");
var telfijoCarol = new telefonos_1.Telefonos("fijo", 918571111);
var telmovilCarol = new telefonos_1.Telefonos("movil", 623456789);
var datosCarol = new personas_1.Persona('Carol', 'Ipsum Ipsum', 19, '23456789M', new Date(2004, 3, 15), 'naranja', 'mujer', [direc1Carol], [mailCarol], [telfijoCarol, telmovilCarol], "Es libre como un pájaro");
console.log("Datos Anteriores:");
console.log(datosAna);
console.log(datosPepe);
console.log(datosCarol);
// Ver Agenda
var agenda = new Array(datosAna, datosPepe, datosCarol);
// Buscar DNI y editar datos
var busca_dni = "12345678T";
var edita_persona = agenda.find(function (persona) { return persona.dni === busca_dni; });
var nueva_direc = new direcciones_1.Direcciones("Calle segunda", 8, 8, false, 99999, "Guadarrama", "Madrid");
var nuevo_mail = new mails_1.Mails("trabajo", "Anaanitaana@hotmail.com");
var nuevo_telf = new telefonos_1.Telefonos("fijo", 918549999);
edita_persona.nueva_direc(nueva_direc);
edita_persona.nuevo_mail(nuevo_mail);
edita_persona.nuevo_telf(nuevo_telf);
console.log("Datos Nuevos:");
console.log(datosAna);
console.log(datosPepe);
console.log(datosCarol);
