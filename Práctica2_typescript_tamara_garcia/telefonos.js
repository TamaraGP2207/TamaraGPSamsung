"use strict";
exports.__esModule = true;
exports.Telefonos = void 0;
var Telefonos = /** @class */ (function () {
    function Telefonos(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Telefonos.prototype, "numero", {
        // GETTERS
        get: function () {
            return this._numero;
        },
        // SETTERS
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefonos.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    return Telefonos;
}());
exports.Telefonos = Telefonos;
