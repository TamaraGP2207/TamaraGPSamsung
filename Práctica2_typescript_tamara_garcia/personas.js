"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumple, color, sexo, direc, mails, telfs, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumple = cumple;
        this._color = color;
        this._sexo = sexo;
        this._direc = direc;
        this._mails = mails;
        this._telfs = telfs;
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        //   GETTERS
        get: function () {
            return this._nombre;
        },
        //   SETTERS
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumple", {
        get: function () {
            return this._cumple;
        },
        set: function (cumple) {
            this._cumple = cumple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direc", {
        get: function () {
            return this._direc;
        },
        set: function (direc) {
            this._direc = direc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (mails) {
            this._mails = mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telfs", {
        get: function () {
            return this._telfs;
        },
        set: function (telfs) {
            this._telfs = telfs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (notas) {
            this._notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.nueva_direc = function (direc) {
        this._direc.push(direc);
    };
    Persona.prototype.nuevo_telf = function (telefono) {
        this._telfs.push(telefono);
    };
    Persona.prototype.nuevo_mail = function (mail) {
        this._mails.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;
