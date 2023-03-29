"use strict";
exports.__esModule = true;
exports.Mails = void 0;
var Mails = /** @class */ (function () {
    function Mails(tipo, correo) {
        this._tipo = tipo;
        this._correo = correo;
    }
    Object.defineProperty(Mails.prototype, "correo", {
        // GETTERS
        get: function () {
            return this._correo;
        },
        // SETTERS
        set: function (correo) {
            this._correo = correo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mails.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    return Mails;
}());
exports.Mails = Mails;
