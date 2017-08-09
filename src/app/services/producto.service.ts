import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/registro.interface';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class ProductoService {

  //productoUrl: string = "http://port-1337.vinicioservidor-vynypm52876.codeanyapp.com/productos";
  pruebaurl: "https://pokemon-ef0d4.firebaseio.com/mangas.json";

  constructor(private _http: Http) { }

  nuevoProducto(producto: Producto){
    let body = JSON.stringify(producto);
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    return this._http.post(this.pruebaurl, body, {headers: headers})
      .map(
        resultado => {
          return resultado.json();
        }
      );
  }
}
