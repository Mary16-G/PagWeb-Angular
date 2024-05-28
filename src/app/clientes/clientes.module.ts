import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoClienteComponent } from './catalogo-cliente/catalogo-cliente.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';



@NgModule({
  declarations: [
    CatalogoClienteComponent,
    EliminarClienteComponent,
    NuevoClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }
