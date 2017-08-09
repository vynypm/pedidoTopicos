import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ServicesComponent } from './components/shared/services/services.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { SistemaComponent } from './components/sistema/sistema.component';

import { routing } from './app.routing';
import { NavbarSistemaComponent } from './components/sistema/navbar-sistema/navbar-sistema.component';
import { PerfilComponent } from './components/sistema/perfil/perfil.component';
import { RegistroComponent } from './components/sistema/registro/registro.component';
import { UsuariosComponent } from './components/sistema/usuarios/usuarios.component';
import { MenuComponent } from './components/sistema/menu/menu.component';
import { PedidosComponent } from './components/sistema/pedidos/pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    LoginComponent,
    PresentacionComponent,
    SistemaComponent,
    NavbarSistemaComponent,
    PerfilComponent,
    RegistroComponent,
    UsuariosComponent,
    MenuComponent,
    PedidosComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
