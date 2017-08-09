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
          this._usuarioService.getUsuarioSails(this.id).subscribe(
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
    console.log(this.usuario);

    if (this.id == 'nuevo') {

      this._usuarioService.nuevoUsuarioSails(this.usuario).subscribe(
        resultado => {
          console.log(resultado);
          this._router.navigate(['/usuario', resultado.id]);


        }
      );
    }else {
      this._usuarioService.editarUsuarioSails(this.usuario, this.id).subscribe(
        resultado => {
          this._router.navigate(['/usuarios' ]);
        }
      );
    }
  }
}


