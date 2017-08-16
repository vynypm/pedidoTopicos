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


  }

  ngOnInit() {
  }
  guardar() {

    if ( this.usuario.password == this.usuario.password1) {
      this._usuarioService.nuevoUsuarioSails(this.usuario).subscribe(
        resp => {
          console.log(resp);
        });
    }else {
      console.log('las contraseñas no coiciden');
    }

  }

}


