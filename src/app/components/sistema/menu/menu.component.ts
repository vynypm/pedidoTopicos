import { Component, OnInit } from '@angular/core';
import { NavbarSistemaComponent } from '../navbar-sistema/navbar-sistema.component';
import {Producto} from '../../../interfaces/registro.interface';
import {ProductoService} from '../../../services/producto.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  listaProductos: Producto [] = [];

  constructor(private _productoServices: ProductoService) {
    this._productoServices.consultarProductos()
      .subscribe(
        respuesta => {
          //console.log(respuesta);
          for (let key$ in respuesta ) {
            //console.log(respuesta[key$]);
            let productoNew = respuesta[key$];
            productoNew.id = respuesta[key$].id;
            //console.log(productoNew.id);
            //console.log(respuesta[key$].id);
            this.listaProductos.push(productoNew);

          }
          console.log(this.listaProductos);
          return this.listaProductos;
        }
      );

    console.log(this.listaProductos);
  }

  ngOnInit() {
  }

  eliminar(id: string, posicion: number) {
    this._productoServices.eliminarProducto(id)
      .subscribe(
        resultado => {
          console.log('se eliminó');
          this.listaProductos.splice(posicion, 1);
        }
      );
  }
}
