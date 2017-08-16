import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../interfaces/usuario.interface';
import 'rxjs/Rx';


@Injectable()
export class UsuarioService {

  usuarioSails: string = ' http://port-1337.vinicioservidor-vynypm52876.codeanyapp.com/usuarios';

  constructor(private _http: Http) {

  }


  nuevoUsuarioSails(usuario: Usuario) {

    return this._http.post(this.usuarioSails,JSON.stringify(usuario)).map(

      res => {
        return res.json();
      }
    );
  }

  getUsuarioSails(indice: string) {
    let urls = `${this.usuarioSails}/${ indice}`;
    return this._http.get(urls)
      .map(
        res => {
          return res.json();
        }
      );
  }



  // editarUsuarioSails(usuario: Usuario, id: string) {
  //
  //   let url = `${this.usuarioSails}/${id}`;
  //   return this._http.put(url, body, {headers: headers}).map(
  //     resultado => {
  //       return resultado.json;
  //     }
  //   );
  // }
  //
  //
  // eliminarUsuarioSails(key$: string) {
  //   let url = `${this.usuarioSails}/${key$}`;
  //   return this._http.delete(url)
  //     .map(
  //       res => {
  //         return res.json();
  //       }
  //     );
  // }
  consultarUsuariosSails() {
    return this._http.get(this.usuarioSails)
      .map(
        res => {
          return res.json();
        }
      );
  }



}
