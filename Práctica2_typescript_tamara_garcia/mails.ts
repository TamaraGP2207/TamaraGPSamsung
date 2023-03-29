
export class Mails {
    private _tipo: string;
    private _correo: string;
  
    constructor(tipo: string, correo: string) {
      this._tipo = tipo;
      this._correo = correo;
    }
  

    // GETTERS

    get correo() {
      return this._correo;
    }
  
    get tipo() {
      return this._tipo;
    }
  

    // SETTERS

    set correo(correo: string) {
      this._correo = correo;
    }
  
    set tipo(tipo: string) {
      this._tipo = tipo;
    }
  
  }