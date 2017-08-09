import { Component, OnInit } from '@angular/core';
import { NavbarSistemaComponent } from '../navbar-sistema/navbar-sistema.component';

import {Producto} from '../../../interfaces/registro.interface';
import {ProductoService} from '../../../services/producto.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  producto: Producto = {
    categoria: "",
    nombre: "",
    precio: null,
    descripcion: "",
  }

  constructor(private _productoServices: ProductoService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.producto);
      this._productoServices.nuevoProducto(this.producto)
        .subscribe(
          resultado => {
            console.log(resultado);
            //this._router.navigate(['/manga', resultado.name ]);
          }
        );
  }
}
