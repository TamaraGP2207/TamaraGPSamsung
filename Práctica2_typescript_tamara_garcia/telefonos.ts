
export class Telefonos {
    private _tipo: string;
    private _numero: number;
  
    constructor(tipo: string, numero: number ) {
      this._tipo = tipo;
      this._numero = numero;
    }
  

    // GETTERS

    get numero() {
      return this._numero;
    }
  
    get tipo() {
      return this._tipo;
    }
  

    // SETTERS
    
    set numero(numero: number) {
      this._numero = numero;
    }
  
    set tipo(tipo: string) {
      this._tipo = tipo;
    }
  }