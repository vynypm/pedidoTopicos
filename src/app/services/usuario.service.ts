import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Usuario } from '../interfaces/usuario.interface';
import 'rxjs/Rx';

@Injectable()
export class UsuarioService {

  usuarioSails:string = 'http:///port-1337.vinicioServidor-vynypm52876.codeanyapp.com/Usuarios';


  constructor(private _http: Http) {

  }




  nuevoUsuarioSails(usuario: Usuario) {
    let body= JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.post(this.usuarioSails, body , { headers: headers })
      .map(
        res => {
          console.log(res.json());
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



  editarUsuarioSails(usuario: Usuario, id: string) {
    let body= JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.usuarioSails}/${id}`;
    return this._http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }


  eliminarUsuarioSails(key$: string) {
    let url = `${this.usuarioSails}/${key$}`;
    return this._http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }
  consultarUsuariosSails() {
    return this._http.get(this.usuarioSails)
      .map(
        res => {
          return res.json();
        }
      );
  }

}
