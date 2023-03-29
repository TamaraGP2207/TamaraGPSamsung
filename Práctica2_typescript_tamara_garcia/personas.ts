import { Direcciones } from './direcciones';
import { Mails } from './mails';
import { Telefonos } from './telefonos';


export class Persona {
  public _nombre: string;
  public _apellidos: string;
  public _edad: number;
  public _dni: string;
  public _cumple: Date;
  public _color: string;
  public _sexo: string;
  public _direc: Array<Direcciones>;
  public _mails: Array<Mails>;
  public _telfs: Array<Telefonos>;
  public _notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumple: Date, color: string, sexo: string, direc: Array<Direcciones>, mails: Array<Mails>, telfs: Array<Telefonos>, notas:string) {
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

//   GETTERS

  get nombre() {
    return this._nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  get edad() {
    return this._edad;
  }

  get dni() {
    return this._dni;
  }

  get cumple() {
    return this._cumple;
  }

  get color() {
    return this._color;
  }

  get sexo() {
    return this._sexo;
  }

  get direc() {
    return this._direc;
  }

  get mails() {
    return this._mails;
  }

  get telfs() {
    return this._telfs;
  }

  get notas() {
    return this._notas;
  }

//   SETTERS

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }

  set edad(edad: number) {
    this._edad = edad;
  }

  set dni(dni: string) {
    this._dni = dni;
  }

  set cumple(cumple: Date) {
    this._cumple = cumple;
  }

  set color(color: string) {
    this._color = color;
  }

  set sexo(sexo: string) {
    this._sexo = sexo;
  }

  set direc(direc: Array<Direcciones>) {
    this._direc = direc;
  }

  set mails(mails: Array<Mails>) {
    this._mails = mails;
  }

  set telfs(telfs: Array<Telefonos>) {
    this._telfs = telfs;
  }

  set notas(notas: string) {
    this._notas = notas;
  }

  nueva_direc(direc:Direcciones) {
    this._direc.push(direc)
  }

  nuevo_telf(telefono:Telefonos) {
    this._telfs.push(telefono)
  }

  nuevo_mail(mail:Mails) {
    this._mails.push(mail)
  }
}