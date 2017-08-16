import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { NavbarSistemaComponent } from '../navbar-sistema/navbar-sistema.component';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  id: string;



  usuario: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password1: '',
    rol: '',
    telefono: ' ',
    img: '',
  };



  constructor(private _usuarioService: UsuarioService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {


    this._activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this._usuarioService.getUsuario(this.id).subscribe(
            resultado => {
              this.usuario = resultado;
            }
          );
        }
      }
    );

  }

  ngOnInit() {
  }
  guardar() {

    if (this.id == 'nuevo') {

      if (this.usuario.password == this.usuario.password1) {
        this._usuarioService.nuevoUsuario(this.usuario).subscribe(
          resp => {
            console.log(resp);
            this._router.navigate(['/usuarios']);
          });
      } else {
        console.log('las contraseñas no coiciden');
      }

    } else {

      this._usuarioService.editarUsuario(this.usuario, this.id).subscribe(
        resultado => {
          this._router.navigate(['/usuarios']);
        }
      );
    }

  }
}

