import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/registro.interface';
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class ProductoService {

  productosSails: string = 'http://port-1337.vinicioservidor-vynypm52876.codeanyapp.com/productos';

  constructor(private _http: Http) { }

  nuevoProducto(producto: Producto) {

    return this._http.post(this.productosSails,JSON.stringify(producto)).map(

      resultado => {
        return resultado.json();
      }
    );
  }
}
