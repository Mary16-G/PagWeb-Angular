import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { NavegacionModule } from './navegacion/navegacion.module';
import { ProductosOpticaModule } from './productos-optica/productos-optica.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { MarcasModule } from './marcas/marcas.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavegacionModule,
    ProductosOpticaModule,
    ProveedoresModule,
    MarcasModule,
    EmpleadosModule,
    UsuariosModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
