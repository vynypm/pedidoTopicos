import { Component, OnInit } from '@angular/core';
import { NavbarSistemaComponent } from '../navbar-sistema/navbar-sistema.component';
import {UsuarioService} from '../../../services/usuario.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: []
})
export class PedidosComponent implements OnInit {

  constructor(private _usuarioServices: UsuarioService,private _router: Router) { }

  ngOnInit() {
    console.log("registro ngOnInit");
    this._usuarioServices.isLogged().then((result:boolean)=>{
      if (!result) {
        this._router.navigate(['/login']);
      }
    })
  }

}
